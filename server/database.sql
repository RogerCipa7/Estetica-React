-- Script para creación de la base de datos GlowBook
-- Importar este archivo en phpMyAdmin

CREATE DATABASE IF NOT EXISTS glowbook_db;
USE glowbook_db;

-- Tabla para las reservas
CREATE TABLE IF NOT EXISTS bookings (
    id VARCHAR(50) PRIMARY KEY,
    clientName VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    totalPrice INT NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(10) NOT NULL,
    status ENUM('recibida', 'realizada', 'no-asistio', 'cancelada') DEFAULT 'recibida',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para los servicios de cada reserva (Relación 1 a muchos)
CREATE TABLE IF NOT EXISTS booking_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id VARCHAR(50),
    service_id VARCHAR(50),
    service_name VARCHAR(100),
    service_price INT,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);
