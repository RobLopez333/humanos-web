# HumanOS Web — Site Architecture V1
Date: 2026-08-19

## Objective

HumanOS Web is the main public hub for the HumanOS ecosystem.

Its role is to explain the platform, organize the product lines, and route users toward the appropriate apps, solutions and contact paths.

HumanOS Web is intentionally separate from `humanos.services`.

## Primary navigation

- Inicio
- Productos
- Soluciones
- Arquitectura
- Contacto

## Homepage structure

### 1. Hero

Purpose:
Explain HumanOS in one clear sentence.

Initial message direction:

HumanOS is a platform that connects context, intelligence, automation and specialized applications to help people operate better in the real world.

Primary CTA:
- Explorar HumanOS

Secondary CTA:
- Ver soluciones

### 2. What is HumanOS

Explain the core idea:

- one ecosystem
- shared architecture
- multiple specialized applications
- user autonomy
- resilient operation
- privacy-aware design

### 3. Product Hub

Initial product lines:

- Flow / Pancho
- Robotics
- Smart Home
- Resilience
- Energy
- Water

Future lines may be added without changing the core site structure.

### 4. How it works

Conceptual flow:

Context
→ Engines
→ Specialized Apps
→ Outcomes

### 5. Ecosystem Architecture

HumanOS is the central platform.

Specialized products connect to the platform without becoming the platform itself.

Conceptual map:

HumanOS
├── Flow / Pancho
├── Robotics
├── Smart Home
├── Resilience
├── Energy
├── Water
└── Future products

### 6. Solutions

Solutions should be expressed around real-world needs rather than only technology categories.

Initial solution areas:

- Personal productivity and energy management
- Intelligent homes
- Automation and robotics
- Energy resilience
- Water resilience
- Operational continuity

### 7. Final CTA

Possible actions:

- Explore products
- See solutions
- Contact HumanOS
- Join future releases

## Product page pattern

Every product line should be able to use a common structure:

1. Product hero
2. Problem
3. HumanOS approach
4. Main capabilities
5. How it connects to the ecosystem
6. Use cases
7. CTA

## Architectural principles

- HumanOS Web is a hub, not a monolithic application.
- Product lines should remain independently evolvable.
- Shared identity and navigation should remain consistent.
- The public website must not contain core business logic.
- Product applications may live on separate routes, subdomains or deployments.
- The website should not become coupled to a single backend, LLM or infrastructure vendor.
- New product lines should be addable without redesigning the entire site.

## Separation from humanos.services

HumanOS Web:
- ecosystem
- product vision
- apps
- architecture
- platform identity

humanos.services:
- commercial services
- implementation
- consulting
- client delivery

The two may reference each other later, but they should remain distinct products and codebases.

## Next decision

Before implementation, define:

1. visual direction
2. homepage copy
3. technical stack
4. deployment model
5. domain / routing strategy
