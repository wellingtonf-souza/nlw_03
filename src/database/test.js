const Database = require('./db.js')

const saveOrphanage = require('./saveOrphanage')

Database.then(async (db)=>{
     await saveOrphanage(db, {
        lat:"-19.860409",
        lng:"-43.940233",
        name:"Casa Lucas",
        about:"A Casa Lucas acolhe crianças de 0 a 6 anos que foram vítimas de negligência ou quaisquer formas de violência. A equipe conta com um grupo de psicólogos, educadores e voluntários que ajudam na educação e cuidado com essas crianças",
        whatsapp:"(31) 3491-0152",
        images:[
            "http://www.casalucas.org/wp-content/uploads/2017/01/casa-lucas-site-1.png",
            "https://images.unsplash.com/photo-1529651490292-99f6f9ade9e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"

        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor",
        opening_hours:"Hoŕario de visitas Das 8h até 18h",
        open_on_weekends:"0"


     })
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '1'")
    console.log(selectedOrphanages)

    //delete
    // await db.run('DELETE FROM orphanages WHERE id = 4')
})