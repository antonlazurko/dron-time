// Общее количество дронов, которое необходимо построить
const totalDrones = 1000000;

// Количество секунд в году (365 дней * 24 часа * 60 минут * 60 секунд)
const secondsInYear = 365 * 24 * 60 * 60;



// Количество дронов, которые необходимо построить каждую секунду
const dronesPerSecond = totalDrones / secondsInYear;

function calculateDronesForCurrentTime() {
    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
    }

    const currentTimeInSeconds = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000);

    const dronesForCurrentTime = (currentTimeInSeconds * dronesPerSecond).toFixed(1);

    const messageTime = getCurrentDateTime()
    const messageCount =dronesForCurrentTime;
    const messageTimeEl = document.querySelector('#messageTime');
    const messageCountEl = document.querySelector('#messageCount');
    messageTimeEl.textContent = messageTime
    messageCountEl.textContent = messageCount
}
calculateDronesForCurrentTime()

setInterval(calculateDronesForCurrentTime, 2500);
