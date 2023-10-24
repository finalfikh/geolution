"use client";
import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col pr-5">
      <div className="self-stretch flex flex-col mr-5 mt-11 mb-9 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="self-stretch z-[1] flex flex-col max-md:max-w-full">
          <div className="items-center self-center flex w-[601px] max-w-full flex-col ml-3">
            <div className="justify-between items-start shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="flex flex-col mt-2">
                <div className="text-neutral-950 text-base font-light">
                  Home
                </div>
                <div className="bg-lime-500 w-[47px] h-1 mt-3" />
              </div>
              <div className="text-neutral-950 text-base font-light">
                Industry
              </div>
              <div className="text-neutral-950 text-base font-light">
                Use Case
              </div>
              <div className="text-neutral-950 text-base font-light">
                Pricing
              </div>
              <div className="text-neutral-950 text-base font-light">
                Company
              </div>
            </div>
          </div>
          <div className="opacity-70 bg-white bg-opacity-70 self-stretch flex grow flex-col mt-14 max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f031a688-b85b-4e48-9f23-dfd24da0baa2?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
              className="aspect-[2.75] object-cover object-center w-full overflow-hidden self-stretch grow max-md:max-w-full"
            />
          </div>
        </div>
        <div className="self-center mt-0 w-[614px] max-w-full ml-14 max-md:mt-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="justify-center text-slate-800 text-center text-4xl font-medium leading-[220%] tracking-tighter mr-0 max-w-[603px] max-md:max-w-full">
                Nama produk
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center text-slate-800 text-center text-4xl font-medium leading-[220%] tracking-tighter max-w-[603px] mt-72 max-md:max-w-full max-md:mt-10">
                Why Spatial Analysis ?
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[1284px] flex-col mt-64 max-md:max-w-full max-md:mt-10">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-800 text-4xl leading-[138.889%] tracking-tighter max-w-[618px] max-md:max-w-full">
                    Suply Chain Optimization to Logistic Business
                  </div>
                  <div className="text-slate-800 text-2xl leading-[166.667%] tracking-tighter max-w-[520px] mt-9 max-md:max-w-full">
                    Suply Chain Optimization to ensure optimal operation of the
                    production and distribution supply chain.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0ddd5db-41ef-467b-8c7c-d4f1c77aa36a?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                  className="aspect-[1.82] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="text-slate-800 text-center text-4xl font-medium leading-[220%] tracking-tighter self-center max-w-[603px] ml-5 mt-14 max-md:max-w-full max-md:mt-10">
            Our Features :
          </div>
          <div className="self-center w-full max-w-[1165px] mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="w-[583px] max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col flex-1 max-md:mt-9">
                          <div className="mix-blend-darken shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-red-50 self-stretch flex w-full grow flex-col pl-2 pr-5 pt-9 pb-7 rounded-3xl">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93896862-883f-48fb-bc67-2a1c87e18b9b?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-[1.05] object-cover object-center w-[91px] overflow-hidden self-center max-w-full"
                            />
                            <div className="justify-center text-slate-800 text-center text-2xl font-medium leading-[166.667%] tracking-tighter self-stretch max-w-[265px] mt-3.5 max-md:mr-0.5">
                              Location Intelligence and Business Analysis
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="mix-blend-darken shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-red-50 flex w-full h-[241px] flex-col flex-1 mx-auto rounded-3xl max-md:mt-9" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[594px] max-w-full mt-4">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col flex-1 max-md:mt-10">
                          <div className="mix-blend-darken shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-red-50 self-stretch flex w-full grow flex-col pt-11 pb-8 px-5 rounded-3xl">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a33146a4-9887-4fc3-bcb7-2821bf2ffe2b?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-[1.16] object-cover object-center w-[92px] overflow-hidden self-center max-w-full"
                            />
                            <div className="justify-center text-slate-800 text-center text-2xl font-medium leading-[166.667%] tracking-tighter self-center max-w-[265px] mt-3.5">
                              Professional User Domain
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col flex-1 max-md:mt-10">
                          <div className="mix-blend-darken shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-red-50 self-stretch flex w-full grow flex-col px-5 py-12 rounded-3xl">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8f8456f-a416-4b4f-9a35-9cedc407192c?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-[1.03] object-cover object-center w-[82px] overflow-hidden self-center max-w-full"
                            />
                            <div className="justify-center text-slate-800 text-center text-2xl font-medium leading-[166.667%] tracking-tighter self-center max-w-[285px] mt-6">
                              Thematic Maping
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[594px] max-w-full mt-10 max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col flex-1 max-md:mt-10">
                          <div className="mix-blend-darken shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-red-50 self-stretch flex w-full grow flex-col pt-10 pb-6 px-5 rounded-3xl">
                            <div className="flex w-full flex-col max-md:ml-px">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfaf385-3d91-4c73-a16b-9a0654c5d483?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                                className="aspect-[1.19] object-cover object-center w-[107px] overflow-hidden self-center max-w-full"
                              />
                              <div className="justify-center text-slate-800 text-center text-2xl font-medium leading-[166.667%] tracking-tighter self-stretch mt-1.5">
                                National Geospatial Agency
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col flex-1 mt-2 max-md:mt-10">
                          <div className="mix-blend-darken shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-red-50 self-stretch flex w-full grow flex-col pt-14 pb-7 px-5 rounded-3xl">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/224ec3ee-a893-493b-aa90-cc2e80be0349?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-[1.05] object-cover object-center w-[91px] overflow-hidden self-center max-w-full -ml-3"
                            />
                            <div className="justify-center text-slate-800 text-center text-2xl font-medium leading-[166.667%] tracking-tighter self-center max-w-[265px]">
                              Commercial Companies
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col mt-11 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-800 text-4xl leading-[138.889%] tracking-tighter max-w-[425px] max-md:max-w-full">
                    What Is Your Industry Sector ?
                  </div>
                  <div className="text-slate-800 text-2xl leading-[166.667%] tracking-tighter w-[415px] max-w-full mt-7">
                    if you want to reduce your business loss. know 80% of data
                    collected by businesses has a location component, but only
                    10% is used to drive decision-making. a business model that
                    will be built by you with excellent data visualization so
                    that you can also analyze and study competitors so that they
                    are able to create their own value for their company. With
                    Location Intelligence, those of you who are starting a
                    business can learn customer activities and habits so as to
                    create improvement personas for sales, marketing and
                    customer service.
                  </div>
                  <div className="justify-center items-center border border-[color:var(--primary-400,#6C63FF)] bg-lime-500 flex w-[142px] max-w-full grow flex-col mt-10 px-5 py-4 rounded-xl border-solid max-md:mt-10">
                    <div className="text-white text-center text-sm font-bold self-center">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-slate-800 text-center text-4xl font-medium leading-[220%] tracking-tighter self-center max-w-[603px] mt-20 max-md:max-w-full max-md:mt-10">
            What are They Saying :
          </div>
          <div className="self-center w-full max-w-[1180px] mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[99%] max-md:w-full max-md:ml-0">
                <div className="grow max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                      <div className="justify-center items-center bg-white flex w-full grow flex-col flex-1 mt-3.5 mx-auto px-5 py-5 rounded-xl max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c97686fd-bc3c-41cc-b840-77d89ebc2bc4?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                          className="aspect-[0.84] object-cover object-center w-[114px] overflow-hidden self-center max-w-full"
                        />
                        <div className="text-zinc-800 text-center text-2xl font-semibold tracking-tight self-center mt-3.5">
                          Feature
                        </div>
                        <div className="text-stone-500 text-center text-sm leading-[178.571%] self-center w-full mt-3.5">
                          Tutorial meditasi dengan panduan yang mudah diikuti
                          dimanapun kamu berada
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-center bg-white flex w-full flex-col flex-1 mx-auto px-5 py-5 rounded-xl max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaa7d9a4-3672-4074-a45d-dc42efd813d5?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                          className="aspect-[0.84] object-cover object-center w-[114px] overflow-hidden self-center max-w-full"
                        />
                        <div className="text-zinc-800 text-center text-2xl font-semibold tracking-tight self-center mt-3.5">
                          Feature
                        </div>
                        <div className="text-stone-500 text-center text-sm leading-[178.571%] self-center w-full mt-3.5">
                          Tutorial meditasi dengan panduan yang mudah diikuti
                          dimanapun kamu berada
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="justify-center items-center bg-white flex w-full flex-col flex-1 mx-auto px-5 py-5 rounded-xl max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2867a6ff-f2a9-4d0e-a738-a7c94f84ed4f?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                          className="aspect-[0.84] object-cover object-center w-[114px] overflow-hidden self-center max-w-full"
                        />
                        <div className="text-zinc-800 text-center text-2xl font-semibold tracking-tight self-center mt-3.5">
                          Feature
                        </div>
                        <div className="text-stone-500 text-center text-sm leading-[178.571%] self-center w-full mt-3.5">
                          Tutorial meditasi dengan panduan yang mudah diikuti
                          dimanapun kamu berada
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[1%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c64a16d7-358c-43bb-9271-d3e1033214f7?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                  className="aspect-[0.6] object-cover object-center w-[15px] fill-black overflow-hidden max-w-full my-auto max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-800 text-center text-4xl font-medium leading-[220%] tracking-tighter self-center max-w-[603px] ml-3.5 mt-36 max-md:max-w-full max-md:mt-10">
          Partner :
        </div>
        <div className="self-center flex w-full max-w-[1301px] grow flex-col mt-[827px] max-md:max-w-full max-md:mt-10">
          <div className="justify-center items-center border border-[color:var(--primary-400,#6C63FF)] bg-lime-500 self-center flex w-[142px] max-w-full flex-col ml-10 px-5 py-4 rounded-xl border-solid">
            <div className="text-white text-center text-sm font-bold self-center">
              Get Started
            </div>
          </div>
          <div className="self-stretch mt-28 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[76%] max-md:w-full max-md:ml-0">
                <div className="grow mt-1.5 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
                        <div className="w-[565px] max-w-full">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
                              <div className="flex grow flex-col mt-6 max-md:mt-10">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/58103e18-82dc-4eb1-aace-073f36493ecf?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                                  className="aspect-[2.71] object-cover object-center w-full overflow-hidden"
                                />
                                <div className="justify-center text-black text-xs font-light leading-[133.333%] max-w-[337px] ml-7 mt-7 max-md:ml-2.5">
                                  gg. Kweni no 14G, Karangwuni, Mlati, <br />
                                  Sleman, Yogyakarta
                                  <br />
                                  55283
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="flex flex-col max-md:mt-5">
                                <div className="text-black text-base font-medium leading-[156.25%]">
                                  Features
                                </div>
                                <div className="text-black text-opacity-70 text-base leading-[100%] mt-2.5">
                                  Business Intelligence and
                                  <br />
                                  Location Intelligence
                                </div>
                                <div className="text-black text-opacity-70 text-base leading-[100%] mt-1.5">
                                  Thematic Maping
                                </div>
                                <div className="text-black text-opacity-70 text-base leading-[100%] mt-2.5">
                                  Commercial Company
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-[366px] max-w-full items-start justify-between gap-5 ml-7 mt-7 max-md:ml-2.5">
                          <div className="flex items-start justify-between gap-5 max-md:justify-center">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e46cf49-b298-4442-9b18-0218337a212c?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d98795a-889a-467a-95c9-e2f3d98b75c4?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51fa99b8-02af-4c74-af6e-78b087e9dee0?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/45050d55-1908-4c30-9897-58b4257e0f9c?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/835303a8-5525-4e13-add9-3b77f0a09bb8?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b6b621-b11f-4f6d-85bb-1153161aed3d?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                              className="aspect-square object-cover object-center w-full overflow-hidden flex-1"
                            />
                          </div>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cc22f9f-fe0a-45b4-9de5-2bd47e4ff5a5?apiKey=51dcb5614f844771aa3b8dbad45e401e&"
                            className="aspect-square object-cover object-center w-px overflow-hidden max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col max-md:mt-10">
                        <div className="text-black text-base font-medium leading-[156.25%]">
                          Use Case
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%] mt-1">
                          Geomarketing
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                          Market Research
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%] mt-1">
                          Marketing and Advertsing
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                          Urban Planing
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                          Logistic
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                          Agriculture
                        </div>
                        <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                          Statistic and sensus
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:mt-10">
                  <div className="text-black text-base font-medium leading-[156.25%]">
                    Demo
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%] mt-1">
                    Request Demo
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[8%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col mt-1.5 max-md:mt-10">
                  <div className="text-black text-base font-medium leading-[156.25%]">
                    Company
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                    About
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                    Career’s
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                    Partnership
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                    Investor’s
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                    News
                  </div>
                  <div className="text-black text-opacity-70 text-base leading-[156.25%]">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


