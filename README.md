# 05 Third-Party APIs: Work Day Scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Description

This application is designed to let you easily manage your busy workday schedule. It allows you to see the exact date and time at the top. With that in mind, you will also be able to see which timeslots have past, which one is the present, and which timeslots are upcoming based on the colors. The user can input their tasks into a timeslot, but the task will not be saved unless the user presses the save button. Once saved, the user can close the application and reopen it later to see their tasks. If the user wishes to clear their schedule for the day, they can do so with the clear schedule button at the top of the page.

### Screenshots