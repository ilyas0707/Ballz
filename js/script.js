$(function () {
    let start = $('.container__add');
    let stop = $('.container__stop');
    let container = $('#container');
    let interval;
    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  
    start.on('click', function () {
      if (!interval) {
        interval = setInterval(() => {
          let element = $('<div>').addClass('circle');

          let divsize = ((Math.random()*100) + 50).toFixed();

          let random_color = colorArray[ Math.floor(Math.random() * colorArray.length) ];document.getElementsByClassName('circle')[0]

          $(element).css({
              'width': divsize + 'px',
              'height': divsize + 'px',
              'position': divsize + 'px',
              'border-radius': '50%',
              'background-color': random_color,
              
          })
          for(let i = 0; i < 10; i++){
            element.appendTo('#container').css({
              'position': 'absolute',
              'left':Math.floor(Math.random() * 500) + 'px',
              'top':Math.floor(Math.random() * 500) + 'px'} )
        }
          container.append(element);
        }, 1000)
      }
    });
  
    stop.on('click', function () {
      clearInterval(interval);
      interval = setInterval(() => {
        $('.circle').css({
          'display': 'none'
        });
      }, 100)
      jQuery('<div/>', {
        class: 'alert'
    }).appendTo('#container');
    $('.alert').text('Кругов не осталось на вашей странице');
    jQuery('<span/>', {
      class: 'closebtn'
  }).appendTo('.alert');
  $('.closebtn').text('x').click(function () {
      this.parentElement.style.display='none'
  });
    });
  })



