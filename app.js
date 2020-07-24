var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var weekday = document.getElementById('weekday');
var now = new Date();
var monthName = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "Octuber" , "November" , "December"];
var weekDayName = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "thursday" , "Friday" , "Saturday"];
var liveTime = document.getElementById('livetime');

day.innerHTML = now.getDate();
var monthString = monthName[now.getMonth()];
month.innerHTML = monthString;
year.innerHTML = now.getFullYear();
var weekDayString = weekDayName[now.getDay()];
weekday.innerHTML = weekDayString;
liveTime.innerHTML = now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();
function livetimefunc(){
    var now = new Date();
    liveTime.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    setTimeout(livetimefunc,1000);
}
setInterval(livetimefunc() , 1000);


function addTodo(){
    var a = document.getElementById('inputtodo');
    var z = document.getElementById('inputtime');
    if(a.value == ""){
        alert('Please Enter Todo');
    } if(z.value == ""){
        alert('Please Enter Todo Time');
    } else {
        var b = document.createElement('div');
        b.setAttribute("class" , "record-box");
        b.setAttribute("id" , "record-box");
        var c = document.createElement('h1');
        c.setAttribute("id" , "task")
        var d = document.createElement('i');
        var e = document.createElement('i');
        var l = document.createElement('p');
        var m = document.createElement('p');
        l.setAttribute("id" , "recordtime");
        m.setAttribute("id" , "tasktime");
        l.innerHTML = "Record Time: " + liveTime.innerHTML;
        m.innerHTML = "Task Time: " + z.value;
        d.setAttribute("class" , "fa fa-edit");
        e.setAttribute("class" , "fa fa-trash");
        d.setAttribute("onclick" , "editBtn(this)");
        e.setAttribute("onclick" , "deleteBtn(this)");
        b.appendChild(c).innerHTML = a.value;
        b.appendChild(e);
        b.appendChild(d);
        b.appendChild(l);
        b.appendChild(m);
        var f = document.getElementById('record-section');
        f.appendChild(b);
        a.value = "";
        z.value = "";
    }
}



function deleteAll(e){
    var a = document.getElementById('record-section');
    a.innerHTML = "";
}

function editBtn(e){
    e.parentElement.remove();
    document.getElementById('inputtodo').value = e.previousSibling.previousSibling.innerHTML;  
}

function deleteBtn(e){
    e.parentElement.remove();
}