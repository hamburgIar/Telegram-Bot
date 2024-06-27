import { CronJob } from "cron"

const createDailyNotificationTimer = (minutes, hours, callback) => {
    const time = `${minutes} ${hours} * * *`
    const timer = new CronJob(time, callback)

    return timer
}

const startDailyTimer = timer => timer.start()

export {
    createDailyNotificationTimer,
    startDailyTimer
}