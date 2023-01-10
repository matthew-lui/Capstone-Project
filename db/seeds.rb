puts "Destroying database"

User.destroy_all
Restaurant.destroy_all
Post.destroy_all

puts "Seeding users...👥"

u1= User.create(username: "luimatthew", password: "1234", email: "luimatthew@gmail.com", profile_pic: "https://www.buy-backdrop.com/bmz_cache/3/349efa748f6f6e982372e7498df4e7c1.image.299x300.jpg" )
u2= User.create(username: "jennifer", password: "1234", email: "jennifer@gmail.com", profile_pic: "https://images.theconversation.com/files/438138/original/file-20211216-25-1hu3e65.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" )

puts "Users seeded!"

puts "Seeding favorites..."

f1= Restaurant.create(business_name: "IPPUDO", address: "65 4th avenue", phone_number: "212-388-0088", website: "https://ippudony.com/", image_url: "https://cdn.vox-cdn.com/thumbor/MqrH-ZqTV0sI0K2pLPvAd-40J9g=/0x0:1000x750/920x613/filters:focal(420x295:580x455):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54789783/ippudo_ny.0.jpg", likes: 100, google_coordinates:"", user_id: u1.id)
f2= Restaurant.create(business_name: "Del Frisco's Double Eagle", address: "1221 ave of Americas", phone_number: "2125755129", website:"https://www.delfriscos.com/location/del-friscos-double-eagle-steakhouse-new-york-ny/", image_url:"https://images.getbento.com/accounts/532b8149fcdb0e1cb7ac97b632998012/media/images/20709Uptown_DEL.jpg?w=1800&fit=max&auto=compress,format&h=1800",likes:10, google_coordinates:"", user_id: u1.id)
f3= Restaurant.create(business_name: "Avant Garden", address:"130 E7th Street", phone_number: "917-336-7179", website:"https://www.overthrowhospitality.com/venues/avantgarden", image_url:"https://images.squarespace-cdn.com/content/5f26b13319c2212d9789d9e2/1617819891880-R00AG384BTBOT3V7P2I7/Avant+Garden+New+York+City+Vegan+Restaurant.jpg?content-type=image%2Fjpeg", likes:10, google_coordinates:"", user_id: u1.id)
f4= Restaurant.create(business_name: "Thai Villa", address: "5 East 19th Street", phone_number: "212-802-9999", website: "https://thaivillanyc.com/", image_url:"https://thaivillanyc.com/uploads/Slides/Gallery/pic_3.jpg", likes:0, google_coordinates:"", user_id: u1.id)
f5= Restaurant.create(business_name: "Catch", address: "88 9th avenue", phone_number: "212-858-8899", website:"https://www.catchrestaurants.com/location/catch-nyc/", image_url:"https://media.timeout.com/images/103233811/image.jpg", likes:0, google_coordinates:"", user_id: u1.id)
f6= Restaurant.create(business_name: "Sushi Yasuda", address: "204 E 43rd Street", phone_number: "212-972-1001", website: "https://www.sushiyasuda.com/information.html", image_url: "https://thesushilegend.com/wp-content/uploads/2020/08/IMG_3600-scaled.jpg", likes:0, google_coordinates:"", user_id: u1.id)
f7= Restaurant.create(business_name:"Damaka", address: "119 Delancey Street", phone_number: "no calls", website:"https://www.dhamaka.nyc/", image_url:"https://images.squarespace-cdn.com/content/v1/5fc8f9afc1e8e65dddbbeb7f/256d091e-e9a4-4220-a94f-bd7ef2018181/Dhamaka_WEB-6.jpg?format=2500w", likes:0, google_coordinates:"", user_id: u1.id)
f8= Restaurant.create(business_name: "Lupe's East L.A. Kitchen", address: "110 6th avenue", phone_number: "212-966-1326", website:"https://lupeskitchen.com/", image_url:"https://media.guestofaguest.com/t_article_content/gofg-media/2016/04/1/46155/lupes.jpg", likes:0, google_coordinates:"",user_id: u1.id)
f9= Restaurant.create(business_name:"Cote", address: "16 West 22nd Street", phone_number: "212-401-7986", website:"https://www.cotenyc.com/", image_url:"https://guide.michelin.com/us/en/new-york-state/new-york/restaurant/cote", likes:0, google_coordinates:"", user_id: u1.id)
f10= Restaurant.create(business_name:"Kikis", address: "130 Division Street", phone_number: "646-882-7052", website: "https://kikisnewyork.mybistro.online/#location", image_url:"https://www.nyrestaurantsguide.com/wp-content/uploads/img/greek/kikis/kikis_new_york_inside_2.jpg",likes:0, google_coordinates:"",user_id: u1.id)


puts "Seeding posts..."

40.times do
    Post.create(
        comments: Faker::Restaurant.review, 
        user_id: User.all.sample.id,
        restaurant_id: Restaurant.all.sample.id,
        likes: rand(1...500)
    )
end

puts "Seeding posts complete!"