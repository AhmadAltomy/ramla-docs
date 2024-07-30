# User Story Workflow

The user story workflow is a set of statuses that a user story can go through during its lifecycle. The workflow is important because it helps the team to understand the current status of the user story and what needs to be done next. The workflow also helps to standardize the process that the team will follow to complete the user story.

In this section, we will define the user story workflow and define the workflow scheme that will be used in the project.

## Statuses

The user story workflow will include the following statuses:

| Status                       | Category    | Role               | When                                                                                  |
| ---------------------------- | ----------- | ------------------ | ------------------------------------------------------------------------------------- |
| **Busniess Phase**           |             |                    |                                                                                       |
| **Draft**                    | Todo        | Product Owner      | Create a new user story and add it to the backlog.                                    |
| **BA Progress**              | In Progress | Product Owner      | Analyze the user story and create the acceptance criteria.                            |
| **Stakeholder Review**       | Todo        | Stakeholder        | If needed, review the user story and provide feedback.                                |
| **UI/UX Phase**              |             |                    |                                                                                       |
| **Ready for Design**         | Todo        | UI/UX Designer     | Ready for Design the user story and create the wireframes.                            |
| **Analysis and Design**      | In Progress | UI/UX Designer     | Analyze the user story and create the mockups.                                        |
| **Refinement Phase**         |             |                    |                                                                                       |
| **Ready for Refinement**     | Todo        | Development Leader | Ready for Refinement the user story and create the tasks.                             |
| **Refinement**               | In Progress | Development Leader | Refine the user story and create the sub-tasks.                                       |
| **Development Phase**        |             |                    |                                                                                       |
| **Ready for Development**    | Todo        | Development Team   | Ready for Development the user story and start the coding.                            |
| **Development**              | In Progress | Development Team   | Develop the user story and create the pull request.                                   |
| **Review Phase**             |             |                    |                                                                                       |
| **Ready for Review**         | Todo        | Development Leader | Ready for Review the user story and start the review.                                 |
| **Review**                   | In Progress | Development Leader | Review the user story and provide feedback.                                           |
| **Testing Phase**            |             |                    |                                                                                       |
| **Ready for SIT**            | Todo        | QA Team            | Ready for SIT the user story and start the testing. (SIT: System Integration Testing) |
| **SIT**                      | In Progress | QA Team            | Test the user story and execute the test cases.                                       |
| **Ready for UAT**            | Todo        | Product Owner      | Ready for UAT the user story and start the testing. (UAT: User Acceptance Testing)    |
| **UAT**                      | In Progress | Product Owner      | Test the user story according to the acceptance criteria.                             |
| **Release Phase**            |             |                    |                                                                                       |
| **Plan Release Version**     | In Progress | Development Leader | Plan the release version and create the release notes.                                |
| **Allocate Release Version** | In Progress | Development Leader | Allocate the release version and create the deployment plan.                          |
| **Done Phase**               |             |                    |                                                                                       |
| **Ready for Release**        | Done        | Development Leader | Ready for Release the user story and start the deployment.                            |
| **Closed**                   | Done        | Development Leader | Close the user story and mark it as done.                                             |
| **Cancelled**                | Done        | Development Leader | Cancel the user story and mark it as cancelled.                                       |
| **PIV**                      | Done        | Development Leader | Put the user story in the product backlog and mark it as PIV.                         |
| **Partially Closed**         | Done        | Development Leader | Partially close the user story and mark it as partially closed.                       |
| **Additional Status**        |             |                    |                                                                                       |
| **On Hold**                  | In Progress | Development Leader | Put the user story on hold and mark it as on hold.                                    |

## Workflow Scheme

The user story workflow scheme will include the following transitions:

### Business Phase

```mermaid
---
title: Business Phase Workflow
---
flowchart 
    D{Draft} -->|Analyze| BA(BA Progress)
    BA -->|Review| SR(Stakeholder Review)
    SR -->|Accept| BA
    BA -->|Ready for Design| RFD(Ready for Design)
    BA -->|Ready for Refinement| RFR(Ready for Refinement)
```

### UI/UX Phase

```mermaid
---
title: UI/UX Phase Workflow
---
flowchart 
    RFD{Ready for Design} -->|Design| AD(Analysis and Design)
    AD -->|Ready for Refinement| RFR(Ready for Refinement)
    AD -->|Need Changes| BA(BA Progress)
    BA -->|Ready for Design| RFD
```

### Refinement Phase

```mermaid
---
title: Refinement Phase Workflow
---
flowchart 
    RFR{Ready for Refinement} -->|Refine| R(Refinement)
    R -->|Ready for Development| RFD(Ready for Development)
    R -->|Need BA Changes| BA(BA Progress)
    BA -->|Ready for Refinement| RFR
    R -->|Need UI/UX Changes| AD(Analysis and Design)
    AD -->|Ready for Refinement| RFR
```

### Development Phase

```mermaid
---
title: Development Phase Workflow
---
flowchart 
    RFD{Ready for Development} -->|Develop| D(Development)
    D -->|Ready for Review| RFR(Ready for Review)
    D -->|Need Refinement| R(Refinement)
    R -->|Ready for Development| RFD
```

### Review Phase

```mermaid
---
title: Review Phase Workflow
---
flowchart 
    RFR{Ready for Review} -->|Review| R(Review)
    R -->|Need Development Changes| D(Development)
    D -->|Ready for Review| RFR
    R -->|Approved| RFD(Ready for SIT)
```

### Testing Phase

```mermaid
---
title: Testing Phase Workflow
---
flowchart 
    RFS{Ready for SIT} -->|Test| SIT(SIT)
    SIT -->|Need Development Changes| D(Development)
    D -->|Ready for SIT| RFS
    SIT -->|Approved| RFU(Ready for UAT)
    RFU{Ready for UAT} -->|Test| UAT(UAT)
    UAT -->|Need Development Changes| D(Development)
    D -->|Ready for UAT| RFU
    UAT -->|Approved| PRV(Plan Release Version)
```

### Release Phase

```mermaid
---
title: Release Phase Workflow
---
flowchart 
    PRV{Plan Release Version} -->|Allocate| ARV(Allocate Release Version)
    ARV -->|Need Development Changes| D(Development)
    D -->|Plan Release Version| PRV
    ARV -->|Approved| RFR(Ready for Release)
```

### Done Phase

```mermaid
---
title: Done Phase Workflow
---
flowchart 
    RFR{Ready for Release} -->|Release| PIV(PIV Version)
```

### Additional Status

```mermaid
---
title: Additional Status Workflow
---
flowchart 
    RFR{Ready for Release} -->|Hold| OH(On Hold)
    OH -->|Need Development Changes| D(Development)
    D -->|Hold| OH
    OH -->|Approved| RFR
```

## Examples

### Backlog Timeline Example

User story status that should worked on while the user story is in the backlog:

```mermaid
---
title: User Story Backlog Example
---
gantt
    title User Story Backlog Example
    dateFormat  YYYY-MM-DD
    section Business Phase
    Draft: 2022-01-01, 2d
    BA Progress: 2022-01-03, 2d
    Stakeholder Review: 2022-01-05, 2d
    section UI/UX Phase
    Ready for Design: 2022-01-07, 2d
    Analysis and Design: 2022-01-09, 2d
    section Refinement Phase
    Ready for Refinement: 2022-01-11, 2d
    Refinement: 2022-01-13, 2d
    Ready for Development: 2022-01-15, 2d
```

### Sprint Timeline Example

User story status that should worked on while the user story is in the sprint:

```mermaid
---
title: User Story Sprint Example
---
gantt
    title User Story Sprint Example
    dateFormat  YYYY-MM-DD
    section Sprint 1
    Ready for Dev: 2022-01-01, 2d
    Development: 2022-01-03, 2d
    Ready for Review: 2022-01-05, 2d
    Review: 2022-01-07, 2d
    Ready for SIT: 2022-01-09, 2d
    SIT: 2022-01-11, 2d
    Ready for UAT: 2022-01-13, 2d
    UAT: 2022-01-15, 2d
    Plan Release Version: 2022-01-17, 2d
    Allocate Version: 2022-01-19, 2d
    Ready for Release: 2022-01-21, 2d
    Closed: 2022-01-23, 2d
```

## Conclusion

The user story workflow is a set of statuses that a user story can go through during its lifecycle. The workflow is important because it helps the team to understand the current status of the user story and what needs to be done next. The workflow also helps to standardize the process that the team will follow to complete the user story. By defining the user story workflow and workflow scheme, the team can work together more effectively and efficiently. The user story workflow will help the team to complete the user stories on time and deliver the project successfully.
