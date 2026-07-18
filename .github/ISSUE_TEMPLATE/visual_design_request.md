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