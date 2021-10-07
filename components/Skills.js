


function Skills() {
  return (
    <div className="accordian-bx">
     <div className="tab w-full overflow-hidden ">
      <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"></input>
      <label className="block p-5 leading-normal cursor-pointer" for="tab-single-one">What Languages Do I Like to Use?</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                  <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
     </div>
     <div className="tab w-full overflow-hidden ">
      <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2"></input>
      <label className="block p-5 leading-normal cursor-pointer" for="tab-single-two">What Experience Do I Have?</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                  <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
               </div>
               <div className="tab w-full overflow-hidden ">
      <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"></input>
      <label className="block p-5 leading-normal cursor-pointer" for="tab-single-three">My Ideal Work Enviroment Would Be...</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                  <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
               
        </div>
        <div className="tab w-full overflow-hidden">
      <input className="absolute opacity-0" id="tab-single-four" type="radio" name="tabs2"></input>
      <label className="block p-5 leading-normal cursor-pointer" for="tab-single-four">What Makes Me Stand Out?</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                  <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
               
        </div>
        <div className="tab w-full overflow-hidden">
      <input className="absolute opacity-0" id="tab-single-five" type="radio" name="tabs2"></input>
      <label className="block p-5 leading-normal cursor-pointer" for="tab-single-five">What Do I Li</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                  <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
               
        </div>
     
</div>
     
  );
}

// var myRadios = document.getElementsByName('tabs2');
//       var setCheck;
//       var x = 0;
//       for(x = 0; x < myRadios.length; x++){
//           myRadios[x].onclick = function(){
//               if(setCheck != this){
//                    setCheck = this;
//               }else{
//                   this.checked = false;
//                   setCheck = null;
//           }
//           };
//       }
export default Skills;