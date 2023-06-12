function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  let [hours, minutes] = time.split(':')
  const total_minutes = Number(hours) * 60 + Number(minutes) + minutesToAdd

  hours = Math.floor(total_minutes / 60) % 12
  hours = hours === 0 ? 12 : hours
  minutes = total_minutes % 60

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

module.exports = clockMinuteAdder
