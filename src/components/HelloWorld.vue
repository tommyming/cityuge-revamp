<template>
  <div>
    <!--The top search session-->
    <div class="topbar-wrapper">
      <v-img
          :src="require('../assets/city.jpg')"
          class="photo-abs"
      />
      <div class="element-wrap">
        <v-container class="px-lg-5">
          <v-row>
            <v-col cols="18">
              <v-row class="my-3" justify="center">
                <v-col cols=6>
                  <v-col>
                    <v-img
                        :src="require('../assets/LOGO_color.svg')"
                        class=""
                        contain
                        height="50px"
                        width="50px"
                    />
                  </v-col>

                  <v-col>
                    <h2> CityU Course Guide</h2>
                    <p>A platform for CityU student to view and share opinions on courses</p>
                  </v-col>

                  <v-col>
                    <v-text-field
                        label="Search Here"
                        placeholder="Search a Course Here"
                        background-color="white"
                        outlined
                    >
                      <template v-slot:append>
                        <v-img
                            :src="require('../assets/icon_search.svg')"
                            width="24"
                            height="24"
                        />
                      </template>
                    </v-text-field>
                  </v-col>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols=6 class="text-right">
                  <v-col>
                    <v-btn
                        class="d-inline-block"
                        color="primary"
                        plain
                    > Login
                    </v-btn>
                    <v-btn
                        class="d-inline-block"
                        color="primary"
                    > Sign Up
                    </v-btn>
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!--The Navigation Bar-->
    <div class="navbar">
      <div class="element-wrap">
        <v-container>
          <v-app-bar
              color="transparent"
              elevation="0"
          >
            <v-btn
                class="d-inline-block"
                color="default"
                plain
            > Features
            </v-btn>
            <v-btn
                class="d-inline-block"
                color="default"
                plain
            > Most viewed GE courses
            </v-btn>
            <v-btn
                class="d-inline-block"
                color="default"
                plain
            > Cost-effective courses
            </v-btn>
            <v-btn
                class="d-inline-block"
                color="default"
                plain
            > Comments
            </v-btn>
            <v-btn
                class="d-inline-block"
                color="default"
                plain
            > Links
            </v-btn>
          </v-app-bar>
        </v-container>
      </div>
    </div>
    <!--The Features session-->
    <div class="bg">
      <div class="element-wrap">
        <v-container>
          <v-col cols="12">
            <h1 class="word-color"> Features </h1>
            <v-col cols="12" class="d-inline-flex">
              <v-col cols="4">
                <v-card color="default" class="ml-auto">
                  <v-img
                      :src="require('../assets/pexels-andrea-piacquadio-3769697.jpg')"
                      width="auto"
                      height="300"
                  />
                  <h3 class="word-color">Find Courses</h3>
                  <p>This is a generating text, provided by handmade stuff</p>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="default" class="ml-auto">
                  <v-img
                      :src="require('../assets/pexels-aline-viana-prado-2465877.jpg')"
                      width="auto"
                      height="300"
                  />
                  <h3 class="word-color">Read Reviews</h3>
                  <p>By looking at the reviews, you can know the performance of the course.</p>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="default" class="ml-auto">
                  <v-img
                      :src="require('../assets/pexels-mentatdgt-1311518.jpg')"
                      width="auto"
                      height="300"
                  />
                  <h3 class="word-color">Give Feedback</h3>
                  <p>Provide Feedback once you have finished the course to help other newcomers!</p>
                </v-card>
              </v-col>
            </v-col>
          </v-col>
        </v-container>
      </div>
    </div>
    <!-- Most Viewed GE Courses-->
    <div>
      <v-container>
        <v-col>
          <v-col>
            <h1 class="word-color">Most Viewed GE Courses</h1>
          </v-col>
          <v-col cols="12" class="d-flex">
            <v-col cols="4">
              <v-simple-table>
                <thead class="grey">
                <tr>
                  <th>Rank</th>
                  <th></th>
                  <th class="text-right">Views</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>GE 1234 Introduction to Psychology</td>
                  <td class="text-right">9999</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>GE 2354 Introduction to Presentation</td>
                  <td class="text-right">9999</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>GE 1234 Introduction to Apple Products</td>
                  <td class="text-right">9999</td>
                </tr>
                </tbody>
              </v-simple-table>
            </v-col>
            <v-col cols="8">
              <v-simple-table>
                <thead class="grey">
                <tr>
                  <th>Comments</th>
                </tr>
                </thead>
                <v-hover>
                  <tbody>
                  <tr>
                    <td>This is a layout comment.</td>
                  </tr>
                  <tr>
                    <td>This is a layout comment.</td>
                  </tr>
                  <tr>
                    <td>This is a layout comment.</td>
                  </tr>
                  </tbody>
                </v-hover>
              </v-simple-table>
            </v-col>
          </v-col>
        </v-col>
      </v-container>
    </div>
    <!--      Comments section-->
    <div>
      <v-container>
        <v-col cols="12">
          <v-col>
            <h1 class="word-color">Comments</h1>
          </v-col>
          <!-- The whole part within the v-card will be generated based on the comments read from the database later on, element will be changed on full implement build. -->
          <v-card outlined class="px-auto">
            <v-card-text class="text-center px-14">
              -- The Course provides subtle information on the subject psychology, while the text is filling up here, I
              hope it can make sure that
              the whole thing works completely fine within the whole process, which looks nice within the whole thing.
            </v-card-text>
            <v-card-subtitle class="text-right">GE1234 Introduction to Psychology</v-card-subtitle>
          </v-card>
        </v-col>
      </v-container>
    </div>
    <!--      Links Section-->
    <div>
      <v-container>
        <v-col class="bg">
          <v-col>
            <h1 class="word-color">Links</h1>
          </v-col>
          <v-col class="d-inline-flex text-center" cols="12">
            <v-col cols="4">
              <v-btn icon href="https://cityusu.hk" target="_blank" class="link-button">
                CITYUSU
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn icon href="https://cityusu.hk" target="_blank" class="link-button">
                CITYUSU-IG
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn icon href="https://cityusu.hk" target="_blank" class="link-button">
                CITYUSU-FB
              </v-btn>
            </v-col>
          </v-col>
        </v-col>
      </v-container>
    </div>
    <!--      Credits-->
    <div>
      <v-container>
        <v-row class="bg-red">
          <v-col cols="18">
            <v-row class="my-3">
              <v-col cols=18>
                <v-col>
                  <v-img
                      :src="require('../assets/LOGO+TEXT_monoPurple.svg')"
                      class=""
                      contain
                      height="50px"
                      width="auto"
                  />
                </v-col>
                <v-col>
                  <v-card class="px-auto" color="#682045" elevation="0">
                    <v-card-text class="word-white">
                      本網站是以即時上載留言的方式運作，所有資料僅供參考，並不構成任何推薦、保證或協議。
                      我們對所有留言的真實性、完整性及立場等，不負任何法律責任。
                      本網站與香港城市大學 (City University of Hong Kong, CityU) 並無任何關連。
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                  <p class="text-right word-white">Version 2.0</p>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--      Bottom Bar-->
    <div>
      <v-container>
        <v-bottom-navigation class="grey d-flex" elevation="0">
          <v-col cols="18" class="d-inline-flex">
            <v-col cols="6">
              <v-row>
                <v-col> About Us</v-col>
                <v-col> Contact Us</v-col>
                <v-col> Development Log</v-col>
              </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6">
              <v-row dense>
                <v-col><p>Find us more in:</p></v-col>
                <v-col>
                  <v-img
                      :src="require('../assets/img_InstagramLOGO.svg')"
                      class="bg-color"
                      contain
                      height="20px"
                      width="20px"
                  />
                </v-col>
                <v-col>
                  <v-img
                      :src="require('../assets/img_FacebookLOGO.svg')"
                      class="bg-color"
                      contain
                      height="20px"
                      width="20px"
                  />
                </v-col>
                <v-col>
                  <v-img
                      :src="require('../assets/img_LinkedinLOGO.svg')"
                      class="bg-color"
                      contain
                      height="20px"
                      width="20px"
                  />
                </v-col>
                <v-col>
                  <v-img
                      :src="require('../assets/img_TwitterLOGO.svg')"
                      class="bg-color"
                      contain
                      height="20px"
                      width="20px"
                  />
                </v-col>
                <v-col>
                  <v-img
                      :src="require('../assets/img_TelegramLOGO.svg')"
                      class="bg-color"
                      contain
                      height="20px"
                      width="20px"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-bottom-navigation>
      </v-container>
    </div>
  </div>
</template>
<style scoped>

body {
  font-family: "Microsoft JhengHei", serif;
}

.topbar-wrapper {
  overflow: hidden;
  position: relative;
}

.photo-abs {
  opacity: 0.4;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.element-wrap {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}

.navbar {
  background-image: linear-gradient(to right, #682045, #D46193);
  background-size: contain;
}

.bg {
  background: #FFE8EE;
}

.bg-red {
  background: #682045;
}

.bg-color {
  filter: invert(98%) sepia(100%) saturate(4%) hue-rotate(55deg) brightness(103%) contrast(100%);
}

.word-color {
  color: #682045;
}

.word-white {
  color: #FFFFFF !important;
}

tbody tr:hover {
  background-color: #682045 !important;
  color: #FFFFFF;
}

.link-button:hover {
  color: #682045 !important;
}
</style>
