<template>
  <div class="border-b border-gray-500 mb-4 pb-4">
    <div class="border-b border-gray-200 bg-white">
    <div class="relative border-b border-gray-200 bg-white t1 ">
      <div class="container mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center py-3 md:justify-start md:space-x-10"
        >
          <div class="lg:w-0 lg:flex-1">
            <a class="flex flex-row items-center" href="/hope-portal">
              <img
                src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png"
                class="h-16 w-auto bg-white shadow rounded-lg mr-2"
                alt="Hope Portal"
              />
            </a>
          </div>
         <!--  <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> -->
          <nav class="flex space-x-2 md:space-x-10 t4 text-sm md:text-base">
            <a
              href="https://anddit.com/hope-portal/location/any/category/any"
              target="_blank"
              class="  text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Browse
            </a>
            <a
              href="https://anddit.com/hope-portal/history"
              target="_blank"
              class=" text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              History
            </a>
            <a
              href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
              target="_blank"
              class=" text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Help
            </a>
            <a
              href="https://anddit.com/organizations/create"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              Add My Organization
            </a>
          </nav>
        </div>
      </div>
    </div>
      <div
        class="bg-white container mx-auto px-4 sm:px-6 flex flex-row items-center text-gray-500 t2 text-sm "
      >
        <div
          class="items-center align-middle py-3 text-sm text-gray-800 justify-left t4 tracking-tight"
        >
         Childhood Cancer Organizations
        </div>
      </div>
      </div>
    <nuxt />
  </div>
</template>


<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
 
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;

}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;

  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.text-primary {
  color:#1062ed;
}

.t0 {
    font-family: AvenirNextLTW01-Regular, sans-serif;
}

.t1 {
    font-family: Avenir Next LT W01 Demi, sans-serif;
}

.t2 {
    font-family: Avenir Next LT W01 Demi, sans-serif;
}

.t3 {
    font-family: Avenir Next LT W01 Bold, sans-serif;
}

.t4 {
    font-family: AvenirNextLTW01-Medium, sans-serif;
}
.border-primary {
    border-color: #1062ed;
}

</style>
