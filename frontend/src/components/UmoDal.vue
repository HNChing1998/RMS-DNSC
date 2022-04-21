<template>
<div id="app">
  <!--Create Request Button-->
    <button class="absolute right-8 bg-gradient-to-r from-green-900 to-green-700  py-2 px-6 rounded-lg"  type="button" v-on:click="toggleModal()">
      CREATE REQUEST
    </button>
  
      <form method="post">
        <div >
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none max-w-screen-2xl w-full">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-green-900">
            <h3 class="text-3xl  text-white ">
              CREATE REQUEST
            </h3>
            <button class="p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class=" text-white  font-bold"> X</span>
            </button>
          </div>
          <!--body-->
          <!--SUBJECT-->
          <div class="relative p-6 ">
            <div class="mx-4 mt-5">
                <div class="relative" >
                    <input type="text" id="subject" class="p-16 font-medium text-base text-justify border-b py-1 w-full focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" autocomplete="off" required>
                        <label for="Subject" class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600 transition-all">Subject:</label>
                </div><hr>
            </div>
          </div>
          <!--DESCRIPTION-->
            <div class="mx-4">
                <textarea id="textArea" v-model="request" type="request" placeholder="Description" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-900 rounded-md text-gray-500 text-sm" required></textarea>
            </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
               <div class="flex space-x-3 space-y-3  justify-end items-baseline" >
                            <span class="cursor-pointer hover: text-red-600 transition duration-500 hover:scale-125 " v-on:click="toggleModal()" > Cancel</span> 
                            <span class="cursor-pointer hover: text-green-600 transition duration-500 hover:scale-125" v-on:click="toggleModal()"  >Continue</span>
                </div>    
            
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
        
      </form>
  
</div>
  
</template>

<script>

export default  {
  
   name: "large-modal",
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }


}
</script>

<style>
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

</style>