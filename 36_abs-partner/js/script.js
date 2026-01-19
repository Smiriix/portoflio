$(document).ready(()=>{
    $(".faq__item label").each((index, item)=>{
        $(item).on("click",()=>{
            $(".faq__item label").each((i, k)=>{
                if($(item)[0] != $(k)[0]){
                    $(k).parent().children("input")[0].checked = false;
                }
            })
        });
    });
    $('#menuBtn').on('click',()=>{
        $("#menuBtn").toggleClass("active");
        $(".mobile__menu").toggleClass("active");
    });
});