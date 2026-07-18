# 🎮 Just a Bit Moore — Portfolio & Studio Profile

**EduTech Tammy** is a premier, full-service digital studio specializing in educational content development.

> *"I have been building online courses professionally since 2002."*

---

## 🚀 Core Expertise

I design and build experiences across several key digital learning frontiers:

- **Instructional Design** — Immersive learning experiences that enable learners to understand complex concepts through game-based systems, simulations, and interactive design. I can build anything from a stand-alone interactive that you want to send students to or embed in your webpage or LMS up to a full Moodle or Canvas LMS course (even with CidiLabs).
- **Visual Design** — Visual design that brings clarity to concepts across all visual design domains: static graphics, animations, 3D, and interactive visual content.
- **Web Design** — Bringing HTML5 content to life so your content shines. I am familiar with several libraries and frameworks.

---

## 🛠️ Full-Service Game Development

I handle every stage of the educational content creation pipeline:

| Category | Specializations |
|---|---|
| **Creative & Design** | Game Design, Visual Interaction Design, Illustration, 3D Modeling, Sound Design |
| **Technical & QA** | Software Engineering, Web Development, Quality Assurance, User Testing |
| **Management** | Production, Project Management, Account Management, Marketing Services |

## 🛠️ Temporary Section for Building Out JIRA like workflow in Projects

name: 🎨 Visual Design Request
description: Use this form to request custom graphics, UI assets, or layout wireframes.
title: "[Design]: "
labels: ["role: visual-design", "status: Needs Triage"]
body:
  - type: markdown
    attributes:
      value: |
        ### Thanks for requesting a design asset! 
        Please provide the specs below so our visual team can get to work.
        
  - type: input
    id: dimensions
    attributes:
      label: Asset Dimensions / Aspect Ratio
      placeholder: e.g., 1920x1080, 16:9, or Hero Banner scaling
    validations:
      required: true

  - type: dropdown
    id: asset-type
    attributes:
      label: Target Deliverable Format
      options:
        - Vector (.svg)
        - High-Res Image (.png)
        - Video Asset (.mp4 / .mov)
        - Figma Wireframe / Prototype
    validations:
      required: true

  - type: textarea
    id: instructional-context
    attributes:
      label: Content & Context from ID (Instructional Designer)
      description: Paste the lesson script, branding guidelines, or copy details here.
      placeholder: What educational text or assets go inside this interactive container?
    validations:
      required: true

---

## 🌐 Live Site

View the portfolio: [edutechtammy.github.io/portfolio](https://edutechtammy.github.io/portfolio)
