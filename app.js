//select the student-list class and assign it to a variable
let $list = $('.student-list');
//the children of the student-list are the individual student-items which are stored in an array
let $students = $list.children();
//get the number of students
let numStudents = $students.length;
//number of pages is students / 10 plus one more page for if remainder, achieved using ceiling
let numPages = Math.ceil(numStudents / 10);

//hide all the students after the first 10 for the first page
for (let i = 10; i < numStudents; i++){
  $($students[i]).css('display','none');
}

//build html for pagination buttons at the bottom
let pagination = '<div class="pagination"><ul>';
pagination += '<li><a class="active" href="#">1</a></li>';
//adding appropriate number of buttons as needed for number of pages
for (let i = 1; i < numPages; i++){
  pagination += '<li><a href="#">' + (i + 1) + '</a></li>';
}
pagination += '</ul></div>';

//turn pagination html into jquery object for easier manipulation
$pages = $(pagination);

//append pagination object
$list.append($pages);

//add event listener for pagination anchor links
$pages.find('a').on('click', function(e){
  //store number found on the link's text to determine which "page" to display
  let num = $(this).text();
  //switch the 'active' tag from the current button to the clicked button
  $pages.find('a').removeClass('active');
  $(this).toggleClass('active');
  //iterate through students hiding and displaying as appropriate
  //for 2: 11-20 show, 3: 21-30, etc and hide all others
  for(let i = 0; i < numStudents; i++){
    if(Math.floor(i / 10) != num - 1){
      $($students[i]).css('display','none');
    }
    else{
      $($students[i]).css('display','');
    }
  }
});