var database = firebase.database();

var events_data;

database.ref("Events/").once('value').then(function(snapshot) {
  events_data = snapshot.val();
  populate(0);
});;


function populate(day) {
	console.log("done");
	var datestring="31-10-2017";
	if (day==0)
		datestring="31-10-2017";
	else if (day==1)
		datestring="01-11-2017";
	else if (day==2)
		datestring="02-11-2017";
	else if (day==3)
		datestring="03-11-2017";
	else if (day==4)
		datestring="04-11-2017";
	$('.event-list').html("");
	var time_sort = events_data[datestring].sort(function(a, b) {
		ax = (a.time.split(":")[0]*60)+(a.time.split(":")[1]);
		bx = (b.time.split(":")[0]*60)+(b.time.split(":")[1]);
	    return parseFloat(ax) - parseFloat(bx);
	});
	for (var i = 1; i < events_data[datestring].length-1; i++) {
		var events_html = '<div class="eventcard row"> <div class="events"> <div class="eventname">'+ events_data[datestring][i]["name"] +'</div> <div class="eventvenue"> <p>'+ events_data[datestring][i]["venue"] +'</p> <p>'+ events_data[datestring][i]["category"] +'</p> </div> </div> <div class="eventtime">'+ events_data[datestring][i]["time"] +'</div> </div>';
		$('.event-list').append(events_html);
	}
}

 var curr_day = 0;
$(".left").click(function(event) {
	if (curr_day==0){
		curr_day = 4;
		$(".datehead").html("November 4");
		populate(4);
	}
	else {
		curr_day -= 1;
		if (curr_day==3) {
			$(".datehead").html("November 3");
			populate(3);
		}
		if (curr_day==2) {
			$(".datehead").html("November 2");
			populate(2);
		}
		if (curr_day==1) {
			$(".datehead").html("November 1");
			populate(1);
		}
		if (curr_day==0) {
			$(".datehead").html("October 31");
			populate(0);
		}
	}
});

$(".right").click(function(event) {
	if (curr_day==4){
		curr_day = 0;
		$(".datehead").html("October 31");
		populate(0);
	}
	else {
		curr_day += 1;
		if (curr_day==3) {
			$(".datehead").html("November 3");
			populate(3);
		}
		if (curr_day==2) {
			$(".datehead").html("November 2");
			populate(2);
		}
		if (curr_day==1) {
			$(".datehead").html("November 1");
			populate(1);
		}
		if (curr_day==4) {
			$(".datehead").html("November 4");
			populate(4);
		}
	}
});
