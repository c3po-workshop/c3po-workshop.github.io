function myDateTime(datetime) {
    document.write(datetime.toLocaleString('default', { dateStyle: 'long', timeStyle: 'short'}));
    document.write(datetime.toLocaleString('default', {timeZone: "UTC", dateStyle: "long", timeStyle: "short"}) + " UTC");
}
