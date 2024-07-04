var locations = [
    {
        name: "Trollskull Manor",
		area: "Trollskull Alley",
        ward: "North Ward",
        type: ["Base", "Residence", "Inn_Tavern_Festhall"],
        coordinates: [62.714462, 21.291504],
        image: "images/Trollskull_Manor.png",
        description: "Four stories tall and boasting balconies, a turret, and five chimneys, this Manorial House and Tavern was once one of the grandest estates in Trollskull Alley. It is now nothing more than a crumbling memory.",
        notableInfo: ""
    },
    {
        name: "Blackstaff Tower",
		area: "Blackstaff Academy",
        ward: "Castle Ward",
        type: ["Academy"],
        coordinates: [29.113775, -39.023438],
        image: "images/blackstaff_tower.png",
        description: "Previously known as Arunsun Tower, Blackstaff Tower stands proud as the Blackstaff Academy's main library, and the headquarters of the Grey Hands. The tower was the home of Khelben \"Blackstaff\" Arunsun as well as of his successors to the title of Blackstaff. The foreboding structure, made of smooth black onyx, is one of Waterdeep's most recognizable landmarks.",
        notableInfo: ""
    },
    {
        name: "Archway Commons",
		area: "Blackstaff Academy",
        ward: "Castle Ward",
        type: ["Miscellaneous"],
        coordinates: [30.145127, -31.508789],
        image: "images/archway_commons.png",
        description: "Just east of Blackstaff Tower lies one of Waterdeep's few public parks. More familiarly called the Commons, the lush park is a favourite spot for students of Blackstaff Academy to gather in fair weather or to wander through on dates. Standing proud at its centre is a statue of Khelben Arunsun, the first Blackstaff.",
        notableInfo: ""
    },


    
    // Add all other locations here...
];

var wards = [
    {
        name: "Field Ward",
        coordinates: [
			[79.726446, -47.48291],
			[79.702907, -44.58252],
			[79.596318, -40.847168],
			[79.420275, -35.024414],
			[79.063478, -28.388672],
			[77.584684, -3.625488],
			[77.331809, 2.548828],
			[75.888091, 18.369141],
			[75.286578, 22.961426],
			[74.419877, 28.168945],
			[73.415885, 32.67334],
			[72.315785, 36.694336],
			[69.488372, 45.17578],
			[68.9505, 44.846191],
			[66.93006, 45.351563],
			[65.910623, 44.912109],
			[65.366837, 44.165039],
			[61.438767, 44.472656],
			[59.998986, 44.67041],
			[59.265881, 44.692383],
			[58.286395, 43.94531],
			[58.309489, 43.110352],
			[60.174306, 42.93457],
			[63.714455, 41.484375],
			[66.705169, 39.726563],
			[69.372573, 35.48584],
			[70.743478, 27.509766],
			[71.510978, 20.083008],
			[72.580829, 13.095703],
			[72.790088, 9.140625],
			[72.796588, 6.98],
			[72.861457, 4.724121],
			[73.207666, 0.74707],
			[73.983207, -6.679688],
			[74.595946, -13.886719],
			[75.292158, -21.467285],
			[76.216441, -28.278809],
			[77.191306, -33.046875],
			[78.260332, -36.870117],
			[78.152551, -41.660156],
			[77.470796, -46.582031],
			[79.063478, -50.163574]
        ],
        color: 'black',
        fillColor: 'green',
        opacity: 0,
        fillOpacity: 0.3,
        popupContent: '<b>Field Ward</b>',
        tooltipContent: 'Field Ward'
    },
    {
        name: "North Ward",
        coordinates: [
			[58.309489, 43.110352],
			[60.174306, 42.93457],
			[63.714455, 41.484375],
			[66.705169, 39.726563],
			[69.372573, 35.48584],
			[70.743478, 27.509766],
			[71.510978, 20.083008],
			[72.580829, 13.095703],
			[72.790088, 9.140625],
			[72.796588, 6.98],
			[71.910888, 6.547852],
			[64.997939, 6.767578],
			[64.90491, -5.493164],
			[38.013476, -5.844727],
			[38.048091, 0.98877],
			[37.909534, 2.636719],
			[35.978006, 6.899414],
			[32.472695, 7.668457],
			[32.602362, 9.931641],
			[30.921076, 14.172363],
			[27.25463, 15.446777],
			[25.562265, 16.743164],
			[25.264568, 17.402344],
			[25.244696, 19.006348],
			[19.766704, 20.983887],
			[18.85431, 21.84082],
			[16.003576, 26.433105],
			[17.119793, 27.114258],
			[20.324024, 28.54248],
			[21.145992, 29.091797],
			[23.5237, 32.102051],
			[25.324167, 33.991699],
			[25.443275, 37.573242],
			[25.443275, 38.562012],
			[20.097206, 45.81298],
			[20.03529, 46.845703],
			[20.509355, 47.021484],
			[22.024546, 47.219238],
			[22.958393, 47.592773],
			[23.905927, 47.768555],
			[24.367114, 48.186035],
			[25.938287, 48.208008],
			[26.961246, 48.383789],
			[28.786918, 48.120117],
			[29.51611, 47.8125],
			[30.240086, 48.22998],
			[31.052934, 48.076172],
			[31.653381, 48.47168],
			[33.742613, 47.702637],
			[34.397845, 47.680664],
			[35.995785, 46.647949],
			[37.177826, 47.131348],
			[37.944198, 46.779785],
			[39.232253, 47.329102],
			[40.010787, 47.087402],
			[40.597271, 47.351074],
			[41.327326, 46.779785],
			[44.182204, 46.362305],
			[46.073231, 46.647949],
			[47.532038, 45.966797],
			[48.239309, 45.966797],
			[48.936935, 46.538086],
			[49.866317, 44.890137],
			[54.110943, 43.527832],
			[54.737308, 43.352051]
        ],
        color: 'black',
        fillColor: 'yellow',
        opacity: 0,
        fillOpacity: 0.3,
        popupContent: '<b>North Ward</b>',
        tooltipContent: 'North Ward'
    },
	
    {
        name: "Sea Ward",
        coordinates: [
			[76.247817, -51.28418],
			[76.026709, -51.767578],
			[69.526834, -58.447266],
			[63.450509, -58.183594],
			[62.965212, -58.293457],
			[61.227957, -58.820801],
			[59.64554, -59.523926],
			[59.64554, -59.523926],
			[59.734253, -60.205078],
			[60.042904, -61.853027],
			[60.250716, -63.237305],
			[58.904646, -64.006348],
			[58.390197, -61.105957],
			[58.240164, -60.534668],
			[57.844751, -60.556641],
			[54.278055, -61.171875],
			[53.956086, -61.325684],
			[53.709714, -61.677246],
			[50.611132, -66.247559],
			[49.138597, -66.708984],
			[47.916342, -67.653809],
			[47.398349, -67.895508],
			[45.890008, -67.763672],
			[45.444717, -67.258301],
			[45.058001, -65.10498],
			[45.336702, -64.467773],
			[45.460131, -63.303223],
			[46.027482, -50.141602],
			[45.935871, -28.674316],
			[46.118942, -26.257324],
			[46.21025, -25.510254],
			[45.95115, -5.844727],
			[64.90491, -5.493164],
			[64.997939, 6.767578],
			[71.910888, 6.547852],
			[72.796588, 6.98],
			[72.861457, 4.724121],
			[73.207666, 0.74707],
			[73.983207, -6.679688],
			[74.595946, -13.886719],
			[75.292158, -21.467285],
			[76.216441, -28.278809],
			[77.191306, -33.046875],
			[78.260332, -36.870117],
			[78.152551, -41.660156],
			[77.470796, -46.582031]
        ],
        color: 'black',
        fillColor: 'blue',
        opacity: 0,
        fillOpacity: 0.3,
        popupContent: '<b>Sea Ward</b>',
        tooltipContent: 'Sea Ward'
    },


    {
        name: "City of the Dead",
        coordinates: [
			[20.097206, 45.81298],
			[25.443275, 38.562012],
			[25.443275, 37.573242],
			[25.324167, 33.991699],
			[23.5237, 32.102051],
			[21.145992, 29.091797],
			[20.324024, 28.54248],
			[17.119793, 27.114258],
			[16.003576, 26.433105],
			[15.083725, 25.601309],
			[12.200215, 23.363979],
			[11.348458, 22.835721],
			[8.102408, 21.406316],
			[0.920334, 21.452927],
			[-2.652192, 21.080038],
			[-3.645047, 20.878057],
			[-8.189742, 19.489746],
			[-11.609193, 28.344727],
			[-11.996338, 29.289551],
			[-13.816744, 31.530762],
			[-14.370834, 32.431641],
			[-15.601875, 34.848633],
			[-15.982454, 35.771484],
			[-16.573023, 38.496094],
			[-16.867634, 39.287109],
			//
			[-16.151369, 39.353027],
			[-10.768556, 39.572754],
			[-9.730714, 39.726563],
			[-3.557283, 41.022949],
			[-2.482133, 41.264648],
			[4.324501, 42.143555],
			[5.375398, 42.297363],
			[11.609193, 42.429199],
			[12.661778, 42.626953],
			[19.145168, 45.021973]
        ],
        color: 'black',
        fillColor: 'dark green',
        opacity: 0,
        fillOpacity: 0.3,
        popupContent: '<b>City of the Dead</b>',
        tooltipContent: 'City of the Dead'
    },
    // Add Sea Ward and City of the Dead in a similar manner
];