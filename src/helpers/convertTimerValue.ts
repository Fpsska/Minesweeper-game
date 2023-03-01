export function convertTimerValue(timeValue: number): string {
    let currentTimeValue = String(timeValue);

    if (timeValue === 0 || timeValue < 10) {
        currentTimeValue = `00${currentTimeValue}`;
    }
    if (timeValue >= 10) {
        return `0${currentTimeValue}`;
    }

    return currentTimeValue;
}
