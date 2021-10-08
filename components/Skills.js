function Skills() {
   return (
     <div className="accordian-bx">
      <div className="tab w-full overflow-hidden ">
       <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2"></input>
       <label className="block p-5 leading-normal cursor-pointer" for="tab-single-one">What Languages Do I Like to Use?</label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                   <p className="p-5">I work with HTML 5, CSS 3, and ES6 on a daily basis. I also have a strong base working with React and Next.JS</p>
                </div>
      </div>
      <div className="tab w-full overflow-hidden ">
       <input className="absolute opacity-0" id="tab-single-two" type="radio" name="tabs2"></input>
       <label className="block p-5 leading-normal cursor-pointer" for="tab-single-two">What Experience Do I Have?</label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                   <p className="p-5">I have been working as a Front-End Web Developer for over a year. I spend most of my workday working on building out new sites and managing support tickets for current live sites. Throughout the years, I have learned how to properly manage and create DNS records for hosting sites, work with WordPress as a CMS, and collaborate with others to finish projects in a effecient and effective way.</p>
                </div>
                </div>
                <div className="tab w-full overflow-hidden ">
       <input className="absolute opacity-0" id="tab-single-three" type="radio" name="tabs2"></input>
       <label className="block p-5 leading-normal cursor-pointer" for="tab-single-three">My Ideal Work Enviroment Would Be...</label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                   <p className="p-5">"My ideal work environment is one where I'm able to work as part of a team and that allows everyone's talents to grow. I've found that this type of environment is most conducive to my productivity, especially in a position that requires me to constantly improve my development skills. It allows me to remain passionate about my job and helps me express my creativity to the best of my ability.</p>
                </div>
                
         </div>
         <div className="tab w-full overflow-hidden">
       <input className="absolute opacity-0" id="tab-single-four" type="radio" name="tabs2"></input>
       <label className="block p-5 leading-normal cursor-pointer" for="tab-single-four">What Makes Me Stand Out?</label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-purple-500 leading-normal">
                   <p className="p-5">I am always trying to improve my skills. I find the field that I am working in is incredibly rewarding and I am always researching new ways to improve my abilities. Having real world experience has allowed me to grow and flourish within this field.</p>
                </div>
                
         </div>
      
 </div>
      
   );
 }
 
//  var myRadios = document.getElementsByName('tabs2');
//        var setCheck;
//        var x = 0;
//        for(x = 0; x < myRadios.length; x++){
//            myRadios[x].onclick = function(){
//                if(setCheck != this){
//                     setCheck = this;
//                }else{
//                    this.checked = false;
//                    setCheck = null;
//            }
//            };
//        }
 export default Skills;