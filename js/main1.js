//Start Working this on Task management

let repeatEvery = $('#repeatEvery').val();
if(repeatEvery != '' && repeatEvery == 'custom'){
  $('#totalCycle').removeClass('d-none');
  $('#repeatEveryCustom').removeClass('d-none');
  $('#repeatTypeCustom').removeClass('d-none');
} else if(repeatEvery != '' && repeatEvery != 'custom'){
  $('#totalCycle').removeClass('d-none');
  $('#repeatEveryCustom').addClass('d-none');
  $('#repeatTypeCustom').addClass('d-none');
}


$(document).on('change','#repeatEvery',function(){
  let value = $(this).val();
  if(value != '' && value == 'custom'){
    $('#totalCycle').removeClass('d-none');
    $('#repeatEveryCustom').removeClass('d-none');
    $('#repeatTypeCustom').removeClass('d-none');
  } else if(value != '' && value != 'custom'){
    $('#totalCycle').removeClass('d-none');
    $('#repeatEveryCustom').addClass('d-none');
    $('#repeatTypeCustom').addClass('d-none');
  }
});



if ($('#infinity').is(':checked')) {
  $('#infinity').val(1);
  $('#cycles').prop('disabled', true);
}

$(document).on('change','#infinity',function(){
  if ($(this).is(':checked')) {
    $('#cycles').prop('disabled', true);
    $('#infinity').val(1);
  }else{
    $('#cycles').prop('disabled', false);
    $('#infinity').val(0);
  }
});


let relatedTo = $('#relatedTo').val();
if(relatedTo != ''){
  $.ajax({
    url: $("#get_related_to_data").val(),
    type: "POST",
    data: {
      value: relatedTo,
      task_id: $('#taskId').val(),
      type: 'edit',
      _token,
    },
    success: function (data) {
      console.log(data);
      $('#dynamicRelatedTo').removeClass('d-none');
      $('#dynamicRelatedTo').html(data.html);
      $('.select2Rel').select2();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}else{
  $('#dynamicRelatedTo').addClass('d-none');
}


$(document).on('change','#relatedTo',function(){
  let value = $(this).val();
  if(value != ''){
    $.ajax({
      url: $("#get_related_to_data").val(),
      type: "POST",
      data: {
        value: value,
        _token,
      },
      success: function (data) {
        console.log(data);
        $('#dynamicRelatedTo').removeClass('d-none');
        $('#dynamicRelatedTo').html(data.html);
        $('.select2Rel').select2();
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      }
    });
  }else{
    $('#dynamicRelatedTo').addClass('d-none');
  }
  
});

$(document).on('click','#attachFile',function(){
  $('#attachmentFile').toggleClass('d-none');
});

let hasImageFile = $('#hasImageFile').val();
if(hasImageFile !== undefined && hasImageFile != ''){
  $('#attachmentFile').removeClass('d-none');
}

$(document).on('click','#crm_theme_btn',function(){
  let title = $('input[name="title"]').val();
  let content = CKEDITOR.instances.contents.getData();

  $('#titleError').text("");
  if(!title.trim()){
    $('#titleError').text("Title field is required!!");
      return false;
  }
  $('#contentError').text("");
  if(!content.trim()){
    $('#contentError').text("Content field is required!!");
      return false; 
  }
});

















