$(()=>{

  // get dom elem
  let $width = $('#width'),

$height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  /*calc button click */
  $btnCal.click(()=>{

 
    //get value
     let w = Number($width.val()),
         h = Number($height.val());

     // calc
     function roundFractional(x, n) {
         return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

     }

     let p = roundFractional(w+h,2),
         a = roundFractional(w*h,2);

     // output
     $perimeter.val(p);
     $area.val(a);
  });

});
