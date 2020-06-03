
<template>
  
 
        
    <ais-instant-search-ssr
                    
        
>

                            <!-- :search-client="searchClient"
                  index-name="development_organizations" -->

                    <!-- app-id="F62MOPA7KR"
                    api-key="8c6d06534136d5d340d3da9558a8c170" -->
<!-- <ais-configure
                :disjunctive-facets-refinements.camel="{
                    states: ['USA United States'],
                    diagnoses: ['All Childhood Cancer']
                }"
            /> -->
            <div
                class="flex flex-col w-full"
                style="background: #f8fafc;background-color: #f8fafc">


                <div class="relative bg-white t1">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div class="lg:w-0 lg:flex-1">
                            <a class="flex flex-row items-center" href="/hope-portal">
                                <img
                                    src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/assetsandimages/HP.png"
                                    class="h-16 w-auto bg-white shadow rounded-lg mr-2"
                                    alt="Hope Portal">
                            </a>
                        </div>
                        <div class="-mr-2 -my-2 md:hidden">
                            <button
                           
                                type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                        <nav class="flex space-x-10">
                            <a
                                href="https://anddit.com/hope-portal/location/any/category/any"
                                target="_blank"
                                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                                >
                                Browse
                            </a>
                            <a
                                href="https://anddit.com/hope-portal/history"
                                target="_blank"
                                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                                >
                                History
                            </a>
                            <a
                                href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
                                target="_blank"
                                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                Help
                            </a>
                            <a
                                href="https://anddit.com/organizations/create"
                                target="_blank"
                                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                Add My Organization
                            </a>
                        </nav>
                        <!-- <div class=" flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                            <span class="inline-flex bg-primary rounded-md shadow-sm">
                                <a
                                    href="/organizations/create"
                                    class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                    Add Your Organization
                                </a>
                            </span>
                        </div> -->
                    </div>
                </div>
                </div>




                <div class="mx-auto w-full md:w-3/5">
                    <div class="flex flex-col w-full">
                        <div class="flex flex-col">
                            <div class="flex md:flex-row flex-col  w-full ">
                                <div class="flex flex-col w-full md:w-1/3 md:items-end px-3">
                                    <div class="flex md:items-end w-full">
                                        <div class="flex flex-col w-full tracking-tight">
                                            <div class="flex flex-col w-full mx-auto">
                                                <div class="w-full items-center my-auto"> 
                                                    <div class="flex flex-row w-full h-12 items-center text-gray-500 t2 text-sm mt-1">
                                                        <div class="items-center align-middle text-sm text-black  justify-left t3 tracking-tight">
                                                            Childhood Cancer Organizations
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul class="flex flex-col text-xs mt-2 w-full">
                                                    <li>
                                                        <div class="flex flex-row w-full justify-between items-center">
                                                            <div class="text-xs t2 uppercase newtitlecolor w-full pb-1">
                                                                FILTER BY CATEGORY
                                                            </div>
                                                        </div>
                                                        <ais-hierarchical-menu
                                                          :attributes="hierarchicalFacets"
                                                            :sort-by="['count:desc']"

                                                            class="t0 text-sm mt-2 tracking-tight"

                                                            />
                                                                
<!-- 
                                                        <ais-hierarchical-menu
                                                        :attributes="hierarchicalFacets"
                                                            :sort-by="['count:desc']"
                                                            class="t0 text-sm mt-2 tracking-tight"
                                                            show-more
                                                        >
                                                        <div
                                                            slot-scope="{
                                                              items,
                                                              canToggleShowMore,
                                                              isShowingMore,
                                                              refine,
                                                              toggleShowMore,
                                                              createURL,
                                                            }"
                                                          >
                                                            <hierarchical-menu-list
                                                              :items="items"
                                                              :refine="refine"
                                                              :createURL="createURL"
                                                            />
                                                            <button
                                                              @click="toggleShowMore()"
                                                              :disabled="!canToggleShowMore"
                                                            >
                                                              {{ isShowingMore ? 'Show less' : 'Show more' }}
                                                            </button>
                                                          </div>
                                                      </ais-hierarchical-menu> -->
                                                    </li>
                                                    <li class="flex flex-col mb-2 mt-3 w-full">
                                                        <div class="flex flex-row w-full justify-between items-center">
                                                            <div class="text-xs t2 uppercase newtitlecolor mt-2 w-full pb-1">
                                                                FILTER BY LOCATION
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col w-full mt-2"
                                                            style="minHeight: 2rem;">
                                                            <div class="flex flex-col w-full relative">
                                                                <ais-refinement-list
                                                                    attribute="states"
                                                                    :limit="0"
                                                                    show-more
                                                                    :show-more-limit="60"
                                                                    :sort-by="['name:asc']"
                                                                    :transformItems="transformers2"
                                                                    operator="or">
                                                                    <div slot-scope="{
                                                                        items,
                                                                        isShowingMore,
                                                                        isFromSearch,
                                                                        canToggleShowMore,
                                                                        refine,
                                                                        createURL,
                                                                        toggleShowMore,
                                                                        searchForItems,
                                                                        isRefined,
                                                                        }">
                                                                        <div class="w-full t0 overflow-y-auto text-sm">
                                                                            <div class="w-full bg-white">
                                                                                <button
                                                                                    @click="toggleShowMore"
                                                                                    :disabled="!canToggleShowMore"
                                                                                    class="py-2  border border-gray-900 selectbutton  w-full rounded ">
                                                                                    <div
                                                                                        v-if="!isShowingMore"
                                                                                        class="flex flex-row justify-between px-2" >
                                                                                        <span class="t4 text-xs text-gray-600">
                                                                                            Select Location
                                                                                        </span>
                                                                                        <span class="t2 text-xs text-primary">
                                                                                            <ChevronDownIcon class="h-4 inline" />
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        v-else
                                                                                        class="flex flex-row justify-between px-2">
                                                                                        <span class="t4 text-xs text-primary">
                                                                                            Close
                                                                                        </span>
                                                                                        <ChevronUpIcon class="h-4 inline" />
                                                                                    </div>
                                                                                </button>
                                                                                <ul
                                                                                    class="absolute w-full z-10 bg-white overflow-y-auto  px-3 shadow border-gray-100" 
                                                                                    style="maxHeight: 20rem;">
                                                                                    <div
                                                                                        @click="toggleShowMore"
                                                                                        :disabled="!canToggleShowMore"
                                                                                        class=" bg-white text-gray-500 t0 text-xs mb-1 mt-2"
                                                                                        v-if="isShowingMore">
                                                                                        Scroll & select location
                                                                                    </div>
                                                                                    <li
                                                                                        v-for="item in items"
                                                                                        :key="item.value"
                                                                                        class="mt-1" >
                                                                                        <a
                                                                                            :href="createURL(item.value)"
                                                                                            @click.prevent="refine(item.value)"
                                                                                            class="flex flex-row items-center">
                                                                                            <div class="w-1/5">
                                                                                                <div
                                                                                                    class="mycheckbox w-4 h-4 rounded border  justify-center items-center  "
                                                                                                    :style="{ backgroundColor: item.isRefined ? '#ebf2fe' : '#fff', borderColor: item.isRefined ? '#1062ed !important' : '#dee2e6', borderWidth: '.5px'  }">
                                                                                                    <CheckIcon
                                                                                                        v-if="item.isRefined"
                                                                                                        class="w-3 h-3 mx-auto"/>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="w-4/5">
                                                                                                <ais-highlight
                                                                                                    attribute="item"
                                                                                                    :hit="item"
                                                                                                    :style="{ fontWeight: item.isRefined ? 'bold' : '', color: item.isRefined ? '#1062ed' : '#4a5568'}"
                                                                                                    class="t0 items-center text-gray-700 text-sm"/>
                                                                                            </div>
                                                                                        </a>
                                                                                    </li>
                                                                                    <div
                                                                                        v-if="isShowingMore"
                                                                                        @click="toggleShowMore"
                                                                                        :disabled="!canToggleShowMore"
                                                                                        class="py-2  bg-white px-2 text-primary ">
                                                                                        Close 
                                                                                    </div>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ais-refinement-list>
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-col w-full items-center mt-2">
                                                            <div class="w-full">
                                                                <ais-toggle-refinement
                                                                    attribute="states"
                                                                    label="Serves United States"
                                                                    on="USA United States"
                                                                    class="text-xs">
                                                                    <div
                                                                        slot-scope="{ value, refine, createURL }"
                                                                        class="flex flex-row items-center w-full justify-between mt-2 mb-1">
                                                                        <div
                                                                            class="t0 text-gray-700 text-xs"
                                                                            :style="{ fontFamily: value.isRefined ? 'Avenir Next LT W01 Demi' : '', color: value.isRefined ? '#1062ed' : '' }">
                                                                            Serves All United States 
                                                                        </div>
                                                                        <div>
                                                                            <toggle-button 
                                                                                v-model="value.isRefined ? true : false"
                                                                                @change="refine(value)"
                                                                                :href="createURL(value)"
                                                                                :width="35"
                                                                                :sync="true"
                                                                                :height="22"
                                                                                class="flex items-center m-0"
                                                                                :color="{checked: '#1062ed', unchecked: '#cbd5e0'}" />
                                                                        </div>
                                                                    </div>
                                                                </ais-toggle-refinement>
                                                            </div>
                                                            <div class="w-full  ">
                                                                <ais-toggle-refinement
                                                                    attribute="states"
                                                                    label="Serves Canada"
                                                                    on="CAN Canada"
                                                                    class="text-xs ">
                                                                    <div
                                                                        slot-scope="{ value, refine, createURL }"
                                                                        class="flex flex-row items-center w-full justify-between my-1">
                                                                        <div
                                                                            class=" t0 text-gray-700 text-xs"
                                                                            :style="{ 
                                                                                fontFamily: value.isRefined ? 'Avenir Next LT W01 Demi' : '',
                                                                                color: value.isRefined ? '#1062ed' : '' }">
                                                                            Serves Canada 
                                                                        </div>
                                                                        <toggle-button
                                                                            v-model="value.isRefined ? true : false"
                                                                            @change="refine(value)"
                                                                            :href="createURL(value)"
                                                                            :width="35"
                                                                            :sync="true"
                                                                            :height="22"
                                                                            class="  flex m-0"
                                                                            :color="{checked: '#1062ed', unchecked: '#cbd5e0'}"/>
                                                                    </div>
                                                                </ais-toggle-refinement> 
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="flex flex-col mt-3">
                                                        <div class="flex flex-row w-full justify-between items-center">
                                                            <div class="text-xs t2 uppercase newtitlecolor  mt-1  w-full pb-1" >
                                                                FILTER BY DIAGNOSIS TYPE
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col  w-full mt-2"
                                                            style="minHeight: 2rem;">
                                                            <div class="flex flex-col w-full  ">
                                                                <ais-refinement-list
                                                                    attribute="diagnoses"
                                                                    :limit="0"
                                                                    show-more
                                                                    :show-more-limit="60"
                                                                    :sort-by="['name:asc']"
                                                                    :transform-items="transformers3"
                                                                    operator="or"
                                                                    class="w-full t0 overflow-y-auto text-sm">
                                                                    <div
                                                                        slot-scope="{
                                                                            items,
                                                                            isShowingMore,
                                                                            isFromSearch,
                                                                            canToggleShowMore,
                                                                            refine,
                                                                            createURL,
                                                                            toggleShowMore,
                                                                            searchForItems,
                                                                            isRefined
                                                                        }"
                                                                        class="w-full">
                                                                        <button
                                                                            @click="toggleShowMore"
                                                                            :disabled="!canToggleShowMore"
                                                                            class="py-2 border border-gray-900 selectbutton rounded w-full bg-white ">
                                                                            <div
                                                                                v-if="!isShowingMore"
                                                                                class="flex flex-row justify-between px-2">
                                                                                <span class="t4 text-xs text-gray-600">
                                                                                    Select Diagnosis
                                                                                </span>
                                                                                <span class="t2 text-xs text-primary">
                                                                                    <ChevronDownIcon class="h-4 inline" />
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                v-else
                                                                                class="flex flex-row justify-between px-2">
                                                                                <span class="t4 text-xs text-primary">
                                                                                    Close
                                                                                </span>
                                                                                <ChevronUpIcon class="h-4 inline" />
                                                                            </div>
                                                                        </button>
                                                                        <ul
                                                                            class=" bg-white overflow-y-auto w-full px-3 shadow border-gray-100"
                                                                            style="maxHeight: 20rem;">
                                                                            <div
                                                                                v-if="isShowingMore"
                                                                                @click="toggleShowMore"
                                                                                :disabled="!canToggleShowMore"
                                                                                class=" bg-white  text-gray-500 t0 text-xs mb-1 mt-2">
                                                                                Scroll & select diagnosis
                                                                            </div>
                                                                            <li
                                                                                v-for="item in items"
                                                                                :key="item.value"
                                                                                class="my-2">
                                                                                <a
                                                                                    :href="createURL(item.value)"
                                                                                    @click.prevent="refine(item.value)"
                                                                                    class="flex flex-row items-center">
                                                                                    <div class="w-1/5">
                                                                                        <div
                                                                                            class="mycheckbox w-4 h-4 rounded border  items-center  "
                                                                                            :style="{
                                                                                                backgroundColor: item.isRefined ? '#ebf2fe' : '#fff',
                                                                                                borderColor: item.isRefined ? '#1062ed !important' : '#dee2e6', borderWidth: '.5px'  }">
                                                                                            <CheckIcon
                                                                                                v-if="item.isRefined"
                                                                                                class="w-3 h-3 mx-auto my-auto"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="w-4/5">
                                                                                        <ais-highlight
                                                                                            attribute="item"
                                                                                            :hit="item"
                                                                                            :style="{
                                                                                                fontWeight: item.isRefined ? 'bold' : '',
                                                                                                color: item.isRefined ? '#1062ed' : '#4a5568'}"
                                                                                            class="t0 items-center text-gray-700 text-sm"/>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                            <div
                                                                                v-if="isShowingMore"
                                                                                @click="toggleShowMore"
                                                                                :disabled="!canToggleShowMore"
                                                                                class="py-2  bg-white px-2 text-primary ">
                                                                                Close 
                                                                            </div>
                                                                        </ul>
                                                                    </div>
                                                                </ais-refinement-list>
                                                            </div>
                                                        </div>
                                                        <div class="w-full  mt-2">
                                                            <ais-toggle-refinement
                                                                attribute="diagnoses"
                                                                label="Serves All Childhood Cancer"
                                                                on="All Childhood Cancer"
                                                                class="text-sm ">
                                                                <div
                                                                    slot-scope="{ value, refine, createURL }"
                                                                    class="flex flex-row items-center w-full justify-between mt-2 mb-1">
                                                                    <div
                                                                        class=" t0 text-gray-700 text-xs"
                                                                        :style="{ 
                                                                            fontFamily: value.isRefined ? 'Avenir Next LT W01 Demi' : '',
                                                                            color: value.isRefined ? '#1062ed' : '' }">
                                                                        Serves All Childhood Cancer 
                                                                    </div>
                                                                    <toggle-button
                                                                        v-model="value.isRefined ? true : false"
                                                                        @change="refine(value)"
                                                                        :href="createURL(value)"
                                                                        :width="35"
                                                                        :sync="true"
                                                                        :height="22"
                                                                        class="  flex m-0"
                                                                        :color="{checked: '#1062ed', unchecked: '#cbd5e0'}"/>
                                                                </div>
                                                            </ais-toggle-refinement> 
                                                        </div>
                                                    </li>

                                                    <li class="flex flex-col mt-4">
                                                        <div class="flex flex-row w-full justify-between items-center">
                                                            <div class="text-xs t3 uppercase newtitlecolor mt-1  w-full pb-1" >
                                                                MORE FILTERS
                                                            </div>
                                                        </div>
                                                        <div class="w-full">
                                                            <div
                                                                class="flex flex-col w-full mt-2">
                                                                <div class="flex flex-col w-full">
                                                                    <ais-refinement-list
                                                                        attribute="tags_names"
                                                                        :sort-by="['name:asc']"
                                                                        operator="or"
                                                                        class="w-full t0 overflow-y-auto text-sm">
                                                                        <div
                                                                            slot-scope="{
                                                                                items,
                                                                                isShowingMore,
                                                                                isFromSearch,
                                                                                canToggleShowMore,
                                                                                refine,
                                                                                createURL,
                                                                                toggleShowMore,
                                                                                searchForItems
                                                                            }"
                                                                            class=" w-full ">
                                                                            <ul
                                                                                class=" w-full px-3 "
                                                                                style="maxHeight: 20rem;">
                                                                                <li
                                                                                    v-for="item in items"
                                                                                    :key="item.value"
                                                                                    class="mt-1">
                                                                                    <a
                                                                                        :href="createURL(item.value)"
                                                                                        @click.prevent="refine(item.value)"
                                                                                        class="flex flex-row items-center">
                                                                                        <div class="w-1/5">
                                                                                            <div
                                                                                                class="mycheckbox w-4 h-4 rounded border  justify-center items-center  " 
                                                                                                :style="{
                                                                                                    backgroundColor: item.isRefined ? '#ebf2fe' : '#fff',
                                                                                                    borderColor: item.isRefined ? '#1062ed !important' : '#dee2e6', 
                                                                                                    borderWidth: '.5px'  }">
                                                                                                <CheckIcon
                                                                                                    v-if="item.isRefined"
                                                                                                    class="w-3 h-3 mx-auto"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="w-4/5">
                                                                                            <ais-highlight
                                                                                                attribute="item"
                                                                                                :hit="item"
                                                                                                :style="{ fontWeight: item.isRefined ? 'bold' : '', color: item.isRefined ? '#1062ed' : '#4a5568'}"
                                                                                                class="t0 items-center text-gray-700 text-sm"/>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </ais-refinement-list>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col md:w-2/3 w-full mx-auto   mb-3 ">
                                    <div class=" flex flex-row rounded items-center w-full mx-auto  h-8 max-w-md mt-2">
                                       <!--  <div class="items-center flex flex-row w-full   items-center  max-w-md mx-auto justify-between border-b py-2 border-gray-300 mb-2 ">
                                            <div class="items-center align-middle text-lg text-newtitlecolor justify-left t3 ">
                                                Childhood Cancer Organizations
                                            </div>
                                            <UsersIcon class="h-4 w-auto text-newtitlecolor  items-center mr-2 "/>
                                        </div> -->
                                    </div>
                                    <div class="">
                                        <div class="flex flex-col justify-between mx-auto max-w-md " >
                                            <div class="flex flex-row  w-full items-center ">
                                                <div class="text-xs w-full items-start ">
                                                    <ais-current-refinements
                                                        class="inline "
                                                        :excluded-attributes="[
                                                            'nationalus',
                                                            'nationalcanada',
                                                            'allchildhoodcancer'
                                                        ]">
                                                        <ul
                                                            slot-scope="{ items, createURL }"
                                                            class="flex flex-wrap mb-2 ">
                                                            <li
                                                                v-for="item in items"
                                                                :key="item.attribute"
                                                                class="">
                                                                <ul class="flex flex-wrap inline" >
                                                                    <li
                                                                        v-if="refinement.label !== '' "
                                                                        v-for="refinement in item.refinements"
                                                                        :key="[
                                                                            refinement.attribute,
                                                                            refinement.value,
                                                                        ].join(':')"
                                                                        class="px-1 items-center mt-2">
                                                                        <a
                                                                            v-if="refinement.label"
                                                                            :href="createURL(refinement)"
                                                                            @click.prevent="item.refine(refinement)"
                                                                            class="flex flex-row text-xs  text-gray-600 tagstyle tagstyle2 rounded-full bg-white border hover:no-underline  border-blue-400 px-2 justify-between py-1 items-center h-full align-middle t4 ">
                                                                            <span>
                                                                                {{ refinement.label }}
                                                                            </span>
                                                                            <XIcon class="ml-1  h-3 inline w-auto tagstyle2 align-middle"></XIcon>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </ais-current-refinements>
                                                </div>
                                            </div>
                                        </div>
                                    </div>










                                    
                                    <div class="items-center flex flex-row w-full  mx-auto mb-2  mt-1 justify-between max-w-md items-center">
                                    
                                    

                                        <div class="md:w-1/2 w-full text-left items-center">
                                         <ais-stats class="text-xs newtitlecolor items-center">
                                                <div slot-scope="{ nbHits }" class="items-center align-middle text-xs t4  justify-left tracking-tight ">
                                                    <span class="newtitlecolor">{{ nbHits }}</span> Organizations

                                                </div>
                                            </ais-stats>
                                        </div>

                                    <div class="w-1/4 text-right  items-center">
                                        <div class="text-xs text-gray-600 justify-right t0 ">




                                        <ais-clear-refinements class="" >
                                                
                                                <div slot-scope="{ canRefine, refine, createURL }">
                                                <a :href="createURL()"
                                                    @click.prevent="refine"
                                                    v-if="canRefine"
                                                    class="text-xs  text-primary px-1 underline"> 
                                                    
                                                   Clear Filters

                                                </a>
                                                <span v-else class="text-xs">
                                                    
                                                </span>
                                                
                                            </div>
                                            </ais-clear-refinements>

                                            
                                                    
                                                  
                                                

                                        </div>
                                    </div>
                                    </div>
                                    







                                    <ais-hits :transform-items="transformItems">
                                        <div
                                            slot-scope="{ items }"
                                            class="flex flex-col w-full max-w-md  mx-auto mb-3 leading-tight">
                                            <organization-card
                                                v-for="item in items"
                                                :key="item.objectID"
                                                :organization="item">
                                            </organization-card>
                                        </div>
                                    </ais-hits>
                                    <div class="flex-row py-4">
                                        <ais-pagination
                                            :show-last="false"
                                            :show-first="false"
                                            class=""
                                            :padding="2"
                                            @click.native="scrollToTop">
                                        </ais-pagination>
                                    </div>
                                    <div class="flex-row py-4 mx-auto text-gray-600 text-sm text-center">
                                        Listings do not constitute endorsements
                                    </div>
                                </div>
                               

                                
                                   <!--  <div class=" flex flex-col md:w-1/5 px-2 items-end">
                                        <div class="flex flex-col w-full md:items-end  ">
                                            <div class="flex flex-row w-full  h-12 items-center text-gray-500 t2 text-sm mt-1 mb-1 mb-3" >
                                            
                                            <div class="items-center align-middle text-sm  justify-left t2 tracking-tight ">
                                                Information

                                            </div>

                                          </div>
                                            

                                            <div class="flex flex-col w-full ">
                                               
                                                
                                                <div class="infocard mb-2 mr-1 w-full ">
                                                    <div class="flex flex-col w-full ">
                                                      
                                                        <div class=" leading-none mt-3 mb-2 rounded bg-white border border-gray-200 py-2 px-3 text-xs">
                                                            

                                                            <div class="flex flex-row items-center mb-4 mt-3 ">
                                                          <a href="https://cac2.org/" target="_blank" class="text-gray-600  t0">
                                                                            Coalition Against Childhood Cancer
                                                                        </a>
                                                            </div>
                                                              <div class="flex flex-row items-center mb-4 ">
                                                            <a href="http://www.aposw.org/" target="_blank" class="text-gray-600  t0">
                                                                              Assoc. of Pediatric Onc. Social Workers
                                                                          </a>
                                                              </div>
                                                                <div class="flex flex-row items-center mb-4 ">
                                                              <a href="https://aphon.org/" target="_blank" class="text-gray-600   t0">
                                                                                Assoc. of Pediatric Hem./Onc. Nurses
                                                                            </a>
                                                                </div>
                                                                  <div class="flex flex-row items-center mb-4 ">
                                                                <a href="https://childrensoncologygroup.org/index.php/cog-family-handbook" target="_blank" class="text-gray-600 t0">
                                                                                  COG Patient Family Handbook
                                                                              </a>
                                                                  </div>
                                                                    <div class="flex flex-row items-center mb-4 ">
                                                                  <a href="http://www.survivorshipguidelines.org/" target="_blank" class="text-gray-600 t0">
                                                                                   COG Survivorship Guidelines
                                                                                </a>
                                                                    </div>



                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                          
                                        </div>
                                    </div> -->





                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                
                  
                </ais-instant-search-ssr>


</template>

















<script src="https://cdn.jsdelivr.net/npm/algoliasearch@3.33.0/dist/algoliasearchLite.min.js" integrity="sha256-3Laj91VXexjTlFLgL8+vvIq27laXdRmFIcO2miulgEs=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-instantsearch@2.0.1/dist/vue-instantsearch.js" integrity="sha256-hugfQrBAG8mfgKvHCfeNrTlM8/SZ/hKStvbvcpVPpaY=" crossorigin="anonymous"></script>




<script>
  import Vue from 'vue'
import OrganizationCard from '@/components/OrganizationCard.vue';
import { ToggleButton } from 'vue-js-toggle-button'
 
Vue.component('ToggleButton', ToggleButton)
import { simple } from 'instantsearch.js/es/lib/stateMappings';

import {
  AisInstantSearchSsr,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisHierarchicalMenu,
  AisPagination,
  AisToggleRefinement,
  AisCurrentRefinements,
  AisClearRefinements,
  createInstantSearch
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

import {
    ChevronDownIcon,
    ChevronUpIcon,
    XIcon,
    CheckIcon,
} from 'vue-feather-icons';

const searchClient = algoliasearch(
  "F62MOPA7KR",
    "85e52ff35b00c7ff5430ea1d182cb818"
);

const { instantsearch, rootMixin } = createInstantSearch({
  searchClient,
  indexName: 'production_organizations'
});

const hierarchicalFacets = [
  'hierarch.lvl0',
  'hierarch.lvl1'
];

export default {
    mixins: [rootMixin],
  asyncData() {
    return instantsearch
      .findResultsState({
        // find out which parameters to use here using ais-state-results
        // query: '',
        // hitsPerPage: 10,
        hierarchicalFacets: [
                {
                  name: 'hierarch.lvl0',
                  attributes: [
                    'hierarch.lvl0',
                    'hierarch.lvl1'
                  ],
                  separator: ' > ',
                  rootPath: null,
                  showParentLevel: true,
                },
              ],

        disjunctiveFacets: ['diagnoses', 'tags_names', 'states' ],
       
     
       // disjunctiveFacetsRefinements: { brand: ['Apple'] }
      })
      .then(() => ({
        instantSearchState: instantsearch.getState(),
        hierarchicalFacets,
      }));
  },
  beforeMount() {
    instantsearch.hydrate(this.instantSearchState)
  },
  mixins: [rootMixin],
  components: {
    AisInstantSearchSsr,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisHierarchicalMenu,
    AisPagination,
    OrganizationCard,
    AisToggleRefinement,
    AisClearRefinements,
    AisCurrentRefinements,
    ChevronDownIcon,
    ChevronUpIcon,
    XIcon,
    CheckIcon,
    
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css'
        }
      ]
    };
  },
  methods: {
    transformItems(items) {
        return items.map(item => ({
            ...item,
            location: 
              item.location.split(":")[1],

        }));
    },
    transformers(items) {
        return items.map(item => ({
            ...item,
            label: item.label.split(" ")[0],
            highlighted: item.highlighted.split(" ")[0], 
        }));
    },
    transformers2(items) {
    return items.filter(item => item.label !== 'USA United States' && item.label !== 'CAN Canada');
    
    },
    transformers3(items) {
    return items.filter(item => item.label !== 'All Childhood Cancer' && item.label !== 'Diagnosis Not Listed');
    
    },
  }
};
</script>



<!-- <script src="https://unpkg.com/feather-icons"></script>
<script>
    feather.replace()
</script> -->
<style>

    .newfooter {
        background: #2d3748 !important;
        background-color: #2d3748 !important;
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

    .p {
        font-family: AvenirNextLTW01-Regular, sans-serif;
    }

    .nav2-link.active {
        color:#1062ed !important;
    }

    .newtitlecolor {
        color:#1f2430;
    }

    .newcolor {
        color:#1f2430;
    }

    .headerheadline {
        font-size:2rem;
    }


    @media (min-width: 768px) {

      .bigheadline {
      font-size:2.5rem;
      color:#1f2430;
      letter-spacing: -0.025em;

    }

      .bannertitle {
     font-size:2.5rem;
     letter-spacing: -0.025em;


    }

    }

    h2 {
        font-family: Avenir Next LT W01 Demi, sans-serif ;

    }

    h3 {
        font-family: AvenirNextLTW01-Medium, sans-serif;

    }



    @media (max-width:980px) {
        .nav-link.active::after {
            content: none;
        }
    }

    .alert-info {
        background-color:#e6fffa !important;
        border-color: #b2f5ea !important;
    }

    .navshad {
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    }

    .dropdown-item.disabled {
        color:#a0aec0 !important;
    }

    .newblue {
        color:#275FFB !important;
    }

    .ais-SearchBox-input {
        font-size:.875rem !important;
        color:#4a5568 !important;
        border:none;
        padding-top: .4rem;
        padding-bottom: .4rem;
    }

    .ais-SearchBox-input::placeholder {
        font-size:.875rem;
        color:#1a202c;
    }

    .ais-Menu-item--selected {
        font-weight:900;
    }

    .ais-Menu-label {
        font-size:12px;
        margin-top:.5rem;
        color:#1062ed;
    }

    .ais-Pagination-link {
        font-size:12px !important;
    }

    .ais-Pagination-item {
    }

    .bestknown6 {
        font-size:10px !important;
    }

    .ais-CurrentRefinements-label {
        display:none;
        background: #f7fafc;
    }

    .ais-CurrentRefinements-item {
        background-color:#edf2f7;
        border: .5px solid #4a5568 !important;
        border-radius: 9999px;
        font-size:10px;
        margin:.5rem;
    }

    .tagstyle {
        border: .5px solid #275FFB !important;
        color: #275FFB;
    }

    .tagstyle2:hover {
        background:#275FFB !important;
        color: #fff;
    }

    .newblue {
        color:#275FFB !important;
    }

    .ais-CurrentRefinements-list {
        flex-wrap: wrap;
    }

    .ais-CurrentRefinements-delete {
        color:#2a4365;
        font-size:.75rem;
    }

    .ais-CurrentRefinements-categoryLabel {
        font-size:.75rem !important;
        color:#2a4365;
    }

    .bigtypes {
        font-size:.5rem !important;
    }

    .ais-RefinementList-labelText {
        font-size:.875rem;
        line-height: 1.2;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        /*font-family: AvenirNextLTW01-Medium, sans-serif;*/
    }

    .ais-RefinementList-label {
        display: inline-flex;
    
    }

    .ais-RefinementList-item {
        align-items: center;
        font-size:.875rem;
        display: inline-flex;
        margin:.25rem;
        width:100%;
    }

    .ais-RefinementList-item--selected {
        color:#1062ed;
        font-family: AvenirNextLTW01-Medium, sans-serif;
    }
    
    .ais-RefinementList-checkbox {
    }
    
    .ais-RefinementList-count {
        display: none;
    }
    
    .ais-ClearRefinements-button {
        background-color:transparent;
        color:gray;
        text-decoration: underline;
    }

    .ais-ClearRefinements-button:hover{
        background-color: transparent;
        color:gray;
    }

    .ais-Menu-count {
        color:#718096;

    }

    .tags {
        font-size:.75rem;
    }
    
    .bgcool {
        background: #ebf2fe;
    }

    .topcat .ais-CurrentRefinements-categoryLabel {
        font-size:1rem !important;
        color:#2a4365;
        border:none !important;
    }

    .topcat .ais-CurrentRefinements-item {
        border:none;
        margin: 0;
        padding: 0;
        background:none;
    }

    .topcat .ais-CurrentRefinements-category {
        margin-left:0;
    }
    
    .ais-HierarchicalMenu-link{
      /*   color:#1062ed;*/
        transition:none;
        margin-bottom:3px;
        /*font-size:.875rem;*/
       /* color:#4a5568;*/
       color:inherit !important;
    }

    .ais-HierarchicalMenu-label {
        font-size:.875rem !important;
        /*color:#4a5568;*/
    }

    .ais-HierarchicalMenu-count{
        color:#718096;
        opacity:.5;
        background:#edf2f7;
        font-size:.75rem;
        font-family: Avenir Next LT W01 Demi, sans-serif;
    }

    .ais-HierarchicalMenu-link:focus {
        color:#1062ed !important;
        font-family: Avenir Next LT W01 Demi, sans-serif;
    }

    .ais-HierarchicalMenu-link:hover {
        color:#1062ed;
    }

    .ais-HierarchicalMenu-list--child {
        font-family: AvenirNextLTW01-Regular, sans-serif;
        font-size:.75rem;

    }

    .ais-HierarchicalMenu-item--selected .ais-HierarchicalMenu-link{
        color:#1062ed !important;
    }

    .ais-CurrentRefinements--noRefinement {
        height:0;
    }

    .is-active {
        background-color: #000 !important;
    }

    .selectbutton {
        border: 1px solid #a0aec0 !important;
    }

    .bg-primary {
        background-color: #1062ed;
    }
</style>