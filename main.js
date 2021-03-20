$(()=>{

    // get dom elem
     let $width = $('#width'),
                $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      $area = $('#area');

$width.keypress((e)=> {
    let key = e.key,
  val = e.target.value,
  pos = e.target.selectonStart;
  val = val.slice(0,pos) + key + val.slice(pos,val.length);

  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(val)) e.preventDefault();
  if(val.indexOf('e') !==-1) e.preventDefault();
  //val = val.slice(0,pos) + key + val.slice(pos,val.length);
 // if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val)) e.preventDefault();
});

$height.keypress((e)=>{
     let key = e.key,
    val = e.target.value,
    pos = e.target.selectionStart;
   val = val.slice(0,pos) + key + val.slice(pos,val.length);
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(val)) e.preventDefault();
    if(val.indexOf('e') !==-1) e.preventDefault();
});

       $width.focusout(()=> {
          if(!validate($width,$widthValidate)){
        $width.select();
      }
    });
    $height.focusout(()=> {
          if(!validate($height,$heightValidate)){
        $height.select();
      }
    });

  /*calc button click */
  $btnCal.click(()=>{
              //get value
      let w = Number($width.val()),
         h = Number($height.val());

     // calc
     function roundFractional(x, n) {
          return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

     }

     //validate
     if(validate($width,$widthValidate) && validate($height,$heightValidate)){
               let p = roundFractional(w*2+h*2,2);
             a = roundFractional(w*h,2);
     // output
                $perimeter.val(p);
         $area.val(a);
     }
  });

  
});

function validate(input,output){
       // is empty
  if(input.val()=== '') {
         output.html('该字段不能为空');
    return false;
  } else {
    output.html('');

  }

  //is number
  let val = Number(input.val());

  if(isNaN(val)) {
          output.html('该字段应该是数值')
      return false;
  }else {
    output.html('');
  }

  //is +
  if(val < 0) {
          output.html('该数值不能小于零');
    return false;
  }else{
    output.html('');
  }
  return true;

}
