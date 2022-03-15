function explicAlert() {
    (async() => {


        const { value: pais } = await Swal.fire({

            title: "Workday",

            text: 'Es nuestro nuevo sistema de gestión donde podras realizar:',
            text: '-Altas y bajas',
            text: '-Modificar tu OOSS',
            text: '-Cambio de posiciones',

            html: "<p>Es nuestro nuevo sistema de gestión donde podras:</p><br>-Altas y bajas<p></p><br><p>-Modificar tu OOSS</p><br><p>-Cambio de posiciones</p>",

            icon: 'none',

            backdrop: true,

            imageUrl: "resources/workday.jpg",

            allowOutsideClick: false,

            showCancelButton: true,

        });




    })()

}