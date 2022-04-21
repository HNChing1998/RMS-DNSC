<template>

  <div id="app">
 <button class="button" @click="showModal = true">
  <b>+</b>CREATE REQUEST
 </button>
 
 <form  method="" >
          <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
        <div class="modal" v-if="showModal">
            <header class=" bg-green-700 rounded-t-md text-white relative h-5 w-500" id="head">
                <h2>CREATE REQUEST</h2>
                 <h1>X</h1>
                    
            </header>
         <div class="mx-4">
             
             

              <div class="mx-4 mt-5">
                  <label>Subject</label>
                  <input type="text"  v-model="about" placeholder="Subject"  class="font-medium text-base text-left border-b py-1 w-full focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" >
                       
                        <hr>
                    </div>
                    <div class="mx-4">
                        <textarea id="textArea" v-model="request" type="request" placeholder="Description" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-900 rounded-md text-gray-500 text-sm" required></textarea>
                    </div>
                    
                    
                     
                        
                        <div class="flex space-x-3 space-y-3  justify-end items-baseline" >
                            <span class="cursor-pointer hover: text-red-600 transition duration-500 hover:scale-125 " > Cancel</span> 
                            <span class="cursor-pointer hover: text-green-600 transition duration-500 hover:scale-125">Continue</span>
                        </div>
                        
                    
                </div>
            </div>
    </transition>
 </form>
</div>
</template>

<script>
export default {
    el:'#app',
    data(){
        return{
            showModal:true
        }
    }

}
</script>

<style>
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 font-family: 'montserrat', sans-serif;
}

#app {
 position: relative;
 
 display: flex;
 justify-content: center;
 align-items: center;
 
 width: 100vw;
 min-height: 100vh;
 overflow-x: hidden;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #126b2e, #168259);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 

}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 500%;
 max-width: 1000px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 
 
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
#textArea{
   height: 250px;
}
#head{
    margin-bottom: 30x;
}

</style>