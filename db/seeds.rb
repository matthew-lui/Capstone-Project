puts "Destroying database"

User.destroy_all
Restaurant.destroy_all
Post.destroy_all

puts "Seeding users...👥"

u1= User.create(username: "luimatthew", password: "1234", email: "luimatthew@gmail.com", profile_pic: "data:image/png;base64,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" )
u2= User.create(username: "lianzi", password: "1234", email: "jennifer@gmail.com", profile_pic: "https://images.theconversation.com/files/438138/original/file-20211216-25-1hu3e65.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" )
u3= User.create(username: "adam", password: "1234", email: "adam@gmail.com", profile_pic: "https://www.acouplecooks.com/wp-content/uploads/2020/04/Manhattan-Cocktail-002.jpg" )
u4= User.create(username: "cerimay  ", password: "1234", email: "ceri@gmail.com", profile_pic: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/PT_dog_pic_cover_0.png.jpg?itok=wnWCDUk2" )
u5= User.create(username: "paige", password: "1234", email: "paige@gmail.com", profile_pic: "https://scontent.fosu2-1.fna.fbcdn.net/v/t1.6435-9/69651319_10157171557082199_8810918459039809536_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ovUdy1y8dWcAX_BX8pH&_nc_ht=scontent.fosu2-1.fna&oh=00_AfCrZIfck2x0f_rh6BfqgxoahdPXoT5wZhZVazI8lv7o5A&oe=63E7BADE" )
u6= User.create(username: "justin", password: "1234", email: "justin@gmail.com", profile_pic: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft" )
u7= User.create(username: "sam", password: "1234", email: "sam@gmail.com", profile_pic: "https://www.shutterstock.com/image-vector/wizard-warlock-logo-design-inspiration-260nw-1897349269.jpg" )
u8= User.create(username: "trey", password: "1234", email: "trey@gmail.com", profile_pic: "https://static.scientificamerican.com/sciam/cache/file/1FCF0242-35AD-4E97-9558FBD4278568CD_source.jpg" )


puts "Users seeded!"

puts "Seeding restaurants..."

r1= Restaurant.create(business_name: "IPPUDO", address: "65 4th avenue, NY, NY 10003", phone_number: "212-388-0088", website: "https://ippudony.com/", image_url: "https://cdn.vox-cdn.com/thumbor/MqrH-ZqTV0sI0K2pLPvAd-40J9g=/0x0:1000x750/920x613/filters:focal(420x295:580x455):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54789783/ippudo_ny.0.jpg", likes: 100, google_coordinates:"", user_id: u1.id)
r2= Restaurant.create(business_name: "Del Frisco's Double Eagle", address: "1221 Ave of Americas, New York, NY 10020", phone_number: "2125755129", website:"https://www.delfriscos.com/location/del-friscos-double-eagle-steakhouse-new-york-ny/", image_url:"https://images.getbento.com/accounts/532b8149fcdb0e1cb7ac97b632998012/media/images/20709Uptown_DEL.jpg?w=1800&fit=max&auto=compress,format&h=1800",likes:10, google_coordinates:"", user_id: u1.id)
r3= Restaurant.create(business_name: "Avant Garden", address:"130 E7th Street", phone_number: "917-336-7179", website:"https://www.overthrowhospitality.com/venues/avantgarden", image_url:"https://images.squarespace-cdn.com/content/5f26b13319c2212d9789d9e2/1617819891880-R00AG384BTBOT3V7P2I7/Avant+Garden+New+York+City+Vegan+Restaurant.jpg?content-type=image%2Fjpeg", likes:10, google_coordinates:"", user_id: u1.id)
r4= Restaurant.create(business_name: "Thai Villa", address: "5 East 19th Street", phone_number: "212-802-9999", website: "https://thaivillanyc.com/", image_url:"https://thaivillanyc.com/uploads/Slides/Gallery/pic_3.jpg", likes:0, google_coordinates:"", user_id: u1.id)
r5= Restaurant.create(business_name: "Catch", address: "88 9th avenue", phone_number: "212-858-8899", website:"https://www.catchrestaurants.com/location/catch-nyc/", image_url:"https://media.timeout.com/images/103233811/image.jpg", likes:0, google_coordinates:"", user_id: u1.id)
r6= Restaurant.create(business_name: "Sushi Yasuda", address: "204 E 43rd Street", phone_number: "212-972-1001", website: "https://www.sushiyasuda.com/information.html", image_url: "https://thesushilegend.com/wp-content/uploads/2020/08/IMG_3600-scaled.jpg", likes:0, google_coordinates:"", user_id: u1.id)
r7= Restaurant.create(business_name:"Damaka", address: "119 Delancey Street", phone_number: "no calls", website:"https://www.dhamaka.nyc/", image_url:"https://images.squarespace-cdn.com/content/v1/5fc8f9afc1e8e65dddbbeb7f/256d091e-e9a4-4220-a94f-bd7ef2018181/Dhamaka_WEB-6.jpg?format=2500w", likes:0, google_coordinates:"", user_id: u1.id)
r8= Restaurant.create(business_name: "Lupe's East L.A. Kitchen", address: "110 6th avenue", phone_number: "212-966-1326", website:"https://lupeskitchen.com/", image_url:"https://media.guestofaguest.com/t_article_content/gofg-media/2016/04/1/46155/lupes.jpg", likes:0, google_coordinates:"",user_id: u1.id)
r9= Restaurant.create(business_name:"Cote", address: "16 West 22nd Street", phone_number: "212-401-7986", website:"https://www.cotenyc.com/", image_url:"https://pyxis.nymag.com/v1/imgs/08e/c91/f30caed5f0a024e8044bfed61c8560ee06-cote-01.rsocial.w1200.jpg", likes:0, google_coordinates:"", user_id: u1.id)
r10= Restaurant.create(business_name:"Kikis", address: "130 Division Street", phone_number: "646-882-7052", website: "https://kikisnewyork.mybistro.online/#location", image_url:"https://www.nyrestaurantsguide.com/wp-content/uploads/img/greek/kikis/kikis_new_york_inside_2.jpg",likes:0, google_coordinates:"",user_id: u1.id)

puts "Restaurants seeded!"
puts "Seeding posts..."

40.times do
    Post.create(
        comments: Faker::Restaurant.review, 
        user_id: User.all.sample.id,
        restaurant_id: Restaurant.all.sample.id,
        likes: rand(1...500)
    )
end

puts "Posts seeded!"

puts "adding favorites"



f1= Favorite.create(user_id: u1.id, restaurant_id: r1.id)
f2= Favorite.create(user_id: u2.id, restaurant_id: r2.id)
f3= Favorite.create(user_id: u1.id, restaurant_id: r3.id)
f4= Favorite.create(user_id: u2.id, restaurant_id: r4.id)
f5= Favorite.create(user_id: u1.id, restaurant_id: r5.id)
f6= Favorite.create(user_id: u2.id, restaurant_id: r6.id)
f7= Favorite.create(user_id: u1.id, restaurant_id: r7.id)
f8= Favorite.create(user_id: u2.id, restaurant_id: r8.id)
f9= Favorite.create(user_id: u1.id, restaurant_id: r9.id)
f10= Favorite.create(user_id: u2.id, restaurant_id: r10.id)


puts "Favorites seeded!"


puts "Seeding posts complete!"