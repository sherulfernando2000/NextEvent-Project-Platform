# 🚀 NextEvent Project Platform

**Infrastructure Orchestration Layer for the NextEvent Microservices Ecosystem**

This repository manages the core platform services (API Gateway, Config Server, and Service Registry) using **Git Submodules** to maintain a clean, modular microservices architecture.

---

## 👤 Student Information

- **Student Name:** Sherul Dhanushka Fernando
- **Student Number:** 2301691014
- **Slack Handle:** Sherul Dhanushka
- **GCP Project ID:** project-0ae0d75b-3979-4ebf-be9

---

## 📝 Project Description

This repository serves as the **Parent Platform** for the NextEvent microservices ecosystem.  
It is responsible for setting up the core infrastructure ("backbone") before domain services (Event, Participant, Registration) are deployed.

### Core Responsibilities

- 🔍 **Service Discovery (Eureka)**  
  Enables dynamic service registration and discovery across microservices.

- ⚙️ **Centralized Configuration (Config Server)**  
  Manages environment-specific configurations in one place.

- 🌐 **API Gateway**  
  Routes external client requests (React frontend) to internal microservices securely and efficiently.

---

## 🧩 Platform Components (Git Submodules)

| Component        | Repository | Description |
|----------------|------------|-------------|
| API Gateway     | View Repo  | Reactive entry point for all client requests |
| Config Server   | View Repo  | Centralized configuration management |
| Service Registry | View Repo | Netflix Eureka server for service discovery |

---

## 🛠 Technology Stack

| Technology | Version / Detail |
|------------|-----------------|
| Java        | 25 |
| Spring Boot | 4.0.3 |
| Spring Cloud | 2025.1.0 |
| Process Manager | PM2 (for GCP persistence) |
| CI/CD | GitHub Actions + Google Cloud SDK |

---

## 🚀 Getting Started

### 1. Clone the Repository (with Submodules)

Since this project uses Git Submodules, clone using:

```bash
git clone --recursive https://github.com/sherulfernando2000/NextEvent-Project-Platform.git