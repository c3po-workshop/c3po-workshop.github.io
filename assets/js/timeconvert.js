function myDateTime(datetime) {
    // parse utc time
    // calculate to local time
    
    //document.write("hello3");
    document.write(datetime.toLocaleString('default', { dateStyle: 'medium', timeStyle: 'short' }));
}
