// For just in

justIn = document.querySelectorAll('li > a > h3');
response = {};
for (count = 0; count < justIn.length; count++) {
    response[count] = justIn[count].textContent;
}
document.write(JSON.stringify(response))

// For trending

trending = document.querySelectorAll('.tptn_link');
response = {};
for (count = 0; count < trending.length; count++) {
    response[count] = trending[count].textContent;
}
document.write(JSON.stringify(response))