$('.ui.dropdown')
   .dropdown({ on: 'hover'});

$('.ui.primary.mini.button').click(function(){
   $('.ui.tiny.modal')
      .modal('setting', 'closable', false)
      .modal('show');
});



let images = ["background.jpg", "mest.jpg"];

function extend(destObj, srcObj)
{
   for (let prop in srcObj)
   {
      if(srcObj.hasOwnProperty(prop))
      {
         destObj[prop] = srcObj[prop];
      }
   }
}



function applyCSS(el, styleObject) {
   extend(el.style, styleObject);
}


let bgImage = document.querySelector("#bgImage");
applyCSS(bgImage, { backgroundImage : "url(/img/" + images[0] + ")" });

let timer = setInterval(function ()
                        {
                           let rand = Math.floor(Math.random() * images.length);

                           applyCSS(bgImage, { backgroundImage : "url(/img/" + images[rand] + ")" });

                        }, 3000);




//
//var typing_text = "a fullstack developer with skills in business and experience in operations management <p> Success is progressive...";
//
//var text_list = typing_text.split('');
//
//var loopTimer;
//
//loopTimer = function ()
//                        {
//                           if(text_list.length > 0){
//                              document.getElementById('typing-text').innerHTML += text_list.shift();
//                           }
//                           else{
//                              //var restartTimer = setTimeout(function ()
//                              //                              {
//                              //                                 document.getElementById('typing-text').innerHTML = " ";
//                              //                                 text_list = typing_text.split('');
//                              //                                 clearTimeout(restartTimer);
//                              //                              },3000)
//                              clearInterval(loopTimer);
//                           }
//
//                        };
//
//loopTimer();