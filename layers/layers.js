var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/ortho/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 20 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);
var format_donnees_hirondellef31_1 = new ol.format.GeoJSON();
var features_donnees_hirondellef31_1 = format_donnees_hirondellef31_1.readFeatures(json_donnees_hirondellef31_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_donnees_hirondellef31_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_donnees_hirondellef31_1.addFeatures(features_donnees_hirondellef31_1);
var lyr_donnees_hirondellef31_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_donnees_hirondellef31_1, 
                style: style_donnees_hirondellef31_1,
                interactive: false,
                title: '<img src="styles/legend/donnees_hirondellef31_1.png" /> donnees_hirondellef31'
            });
var format_donnees_martinetnoir31_2 = new ol.format.GeoJSON();
var features_donnees_martinetnoir31_2 = format_donnees_martinetnoir31_2.readFeatures(json_donnees_martinetnoir31_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_donnees_martinetnoir31_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_donnees_martinetnoir31_2.addFeatures(features_donnees_martinetnoir31_2);
var lyr_donnees_martinetnoir31_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_donnees_martinetnoir31_2, 
                style: style_donnees_martinetnoir31_2,
                interactive: false,
                title: '<img src="styles/legend/donnees_martinetnoir31_2.png" /> donnees_martinetnoir31'
            });
var format_Grille_3 = new ol.format.GeoJSON();
var features_Grille_3 = format_Grille_3.readFeatures(json_Grille_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grille_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grille_3.addFeatures(features_Grille_3);
var lyr_Grille_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grille_3, 
                style: style_Grille_3,
                interactive: true,
                title: '<img src="styles/legend/Grille_3.png" /> Grille'
            });
var format_Intersection_4 = new ol.format.GeoJSON();
var features_Intersection_4 = format_Intersection_4.readFeatures(json_Intersection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_4.addFeatures(features_Intersection_4);
var lyr_Intersection_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intersection_4, 
                style: style_Intersection_4,
                interactive: true,
                title: '<img src="styles/legend/Intersection_4.png" /> Intersection'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_donnees_hirondellef31_1.setVisible(true);lyr_donnees_martinetnoir31_2.setVisible(true);lyr_Grille_3.setVisible(true);lyr_Intersection_4.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_donnees_hirondellef31_1,lyr_donnees_martinetnoir31_2,lyr_Grille_3,lyr_Intersection_4];
lyr_donnees_hirondellef31_1.set('fieldAliases', {'ID_SIGHTING': 'ID_SIGHTING', 'ID_SPECIES': 'ID_SPECIES', 'NAME_SPECIES': 'NAME_SPECIES', 'LATIN_SPECIES': 'LATIN_SPECIES', 'TAXONOMY_NAME': 'TAXONOMY_NAME', 'FAMILY_NAME': 'FAMILY_NAME', 'SYS_ORDER': 'SYS_ORDER', 'DATE': 'DATE', 'TIMING': 'TIMING', 'ID_FORM': 'ID_FORM', 'TIME_START': 'TIME_START', 'TIME_STOP': 'TIME_STOP', 'FULL_FORM': 'FULL_FORM', 'DAILY_TEXT_COMMENT_REM': 'DAILY_TEXT_COMMENT_REM', 'ID_PLACE': 'ID_PLACE', 'PLACE': 'PLACE', 'MUNICIPALITY': 'MUNICIPALITY', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'COORD_LAT': 'COORD_LAT', 'COORD_LON': 'COORD_LON', 'GRID_NAME': 'GRID_NAME', 'PRECISION': 'PRECISION', 'ALTITUDE': 'ALTITUDE', 'ESTIMATION_CODE': 'ESTIMATION_CODE', 'TOTAL_COUNT': 'TOTAL_COUNT', 'DETAIL': 'DETAIL', 'ATLAS_CODE': 'ATLAS_CODE', 'BEHAVIOUR': 'BEHAVIOUR', 'SECOND_HAND': 'SECOND_HAND', 'HIDDEN': 'HIDDEN', 'ADMIN_HIDDEN': 'ADMIN_HIDDEN', 'COMMENT': 'COMMENT', 'PRIVATE_COMMENT': 'PRIVATE_COMMENT', 'MEDIA_HAS_MEDIA': 'MEDIA_HAS_MEDIA', 'ANONYMOUS': 'ANONYMOUS', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'SEARCH_EXPORT_ENTITY_FULL_NAME', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME', 'PROTOCOL': 'PROTOCOL', 'HAS_DEATH_INFO': 'HAS_DEATH_INFO', 'INSERT_DATE': 'INSERT_DATE', 'UPDATE_DATE': 'UPDATE_DATE', });
lyr_donnees_martinetnoir31_2.set('fieldAliases', {'ID_SIGHTING': 'ID_SIGHTING', 'ID_SPECIES': 'ID_SPECIES', 'NAME_SPECIES': 'NAME_SPECIES', 'LATIN_SPECIES': 'LATIN_SPECIES', 'TAXONOMY_NAME': 'TAXONOMY_NAME', 'FAMILY_NAME': 'FAMILY_NAME', 'SYS_ORDER': 'SYS_ORDER', 'DATE': 'DATE', 'TIMING': 'TIMING', 'ID_FORM': 'ID_FORM', 'TIME_START': 'TIME_START', 'TIME_STOP': 'TIME_STOP', 'FULL_FORM': 'FULL_FORM', 'DAILY_TEXT_COMMENT_REM': 'DAILY_TEXT_COMMENT_REM', 'ID_PLACE': 'ID_PLACE', 'PLACE': 'PLACE', 'MUNICIPALITY': 'MUNICIPALITY', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'COORD_LAT': 'COORD_LAT', 'COORD_LON': 'COORD_LON', 'GRID_NAME': 'GRID_NAME', 'PRECISION': 'PRECISION', 'ALTITUDE': 'ALTITUDE', 'ESTIMATION_CODE': 'ESTIMATION_CODE', 'TOTAL_COUNT': 'TOTAL_COUNT', 'DETAIL': 'DETAIL', 'ATLAS_CODE': 'ATLAS_CODE', 'BEHAVIOUR': 'BEHAVIOUR', 'SECOND_HAND': 'SECOND_HAND', 'HIDDEN': 'HIDDEN', 'ADMIN_HIDDEN': 'ADMIN_HIDDEN', 'COMMENT': 'COMMENT', 'PRIVATE_COMMENT': 'PRIVATE_COMMENT', 'MEDIA_HAS_MEDIA': 'MEDIA_HAS_MEDIA', 'ANONYMOUS': 'ANONYMOUS', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'SEARCH_EXPORT_ENTITY_FULL_NAME', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME', 'PROTOCOL': 'PROTOCOL', 'HAS_DEATH_INFO': 'HAS_DEATH_INFO', 'INSERT_DATE': 'INSERT_DATE', 'UPDATE_DATE': 'UPDATE_DATE', });
lyr_Grille_3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Intersection_4.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'nom_m': 'nom_m', 'insee_com': 'insee_com', 'statut': 'statut', 'population': 'population', 'insee_can': 'insee_can', 'insee_arr': 'insee_arr', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', 'siren_epci': 'siren_epci', 'id_2': 'id_2', 'nom_m_2': 'nom_m_2', 'nom_2': 'nom_2', 'insee_dep_2': 'insee_dep_2', 'insee_reg_2': 'insee_reg_2', });
lyr_donnees_hirondellef31_1.set('fieldImages', {'ID_SIGHTING': 'TextEdit', 'ID_SPECIES': 'TextEdit', 'NAME_SPECIES': 'TextEdit', 'LATIN_SPECIES': 'TextEdit', 'TAXONOMY_NAME': 'TextEdit', 'FAMILY_NAME': 'TextEdit', 'SYS_ORDER': 'TextEdit', 'DATE': 'TextEdit', 'TIMING': 'TextEdit', 'ID_FORM': 'TextEdit', 'TIME_START': 'TextEdit', 'TIME_STOP': 'TextEdit', 'FULL_FORM': 'TextEdit', 'DAILY_TEXT_COMMENT_REM': 'TextEdit', 'ID_PLACE': 'TextEdit', 'PLACE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'COORD_LAT': 'TextEdit', 'COORD_LON': 'TextEdit', 'GRID_NAME': 'TextEdit', 'PRECISION': 'TextEdit', 'ALTITUDE': 'TextEdit', 'ESTIMATION_CODE': 'TextEdit', 'TOTAL_COUNT': 'TextEdit', 'DETAIL': 'TextEdit', 'ATLAS_CODE': 'TextEdit', 'BEHAVIOUR': 'TextEdit', 'SECOND_HAND': 'TextEdit', 'HIDDEN': 'TextEdit', 'ADMIN_HIDDEN': 'TextEdit', 'COMMENT': 'TextEdit', 'PRIVATE_COMMENT': 'TextEdit', 'MEDIA_HAS_MEDIA': 'TextEdit', 'ANONYMOUS': 'TextEdit', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'TextEdit', 'PROTOCOL': 'TextEdit', 'HAS_DEATH_INFO': 'TextEdit', 'INSERT_DATE': 'TextEdit', 'UPDATE_DATE': 'TextEdit', });
lyr_donnees_martinetnoir31_2.set('fieldImages', {'ID_SIGHTING': 'TextEdit', 'ID_SPECIES': 'TextEdit', 'NAME_SPECIES': 'TextEdit', 'LATIN_SPECIES': 'TextEdit', 'TAXONOMY_NAME': 'TextEdit', 'FAMILY_NAME': 'TextEdit', 'SYS_ORDER': 'TextEdit', 'DATE': 'TextEdit', 'TIMING': 'TextEdit', 'ID_FORM': 'TextEdit', 'TIME_START': 'TextEdit', 'TIME_STOP': 'TextEdit', 'FULL_FORM': 'TextEdit', 'DAILY_TEXT_COMMENT_REM': 'TextEdit', 'ID_PLACE': 'TextEdit', 'PLACE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'COORD_LAT': 'TextEdit', 'COORD_LON': 'TextEdit', 'GRID_NAME': 'TextEdit', 'PRECISION': 'TextEdit', 'ALTITUDE': 'TextEdit', 'ESTIMATION_CODE': 'TextEdit', 'TOTAL_COUNT': 'TextEdit', 'DETAIL': 'TextEdit', 'ATLAS_CODE': 'TextEdit', 'BEHAVIOUR': 'TextEdit', 'SECOND_HAND': 'TextEdit', 'HIDDEN': 'TextEdit', 'ADMIN_HIDDEN': 'TextEdit', 'COMMENT': 'TextEdit', 'PRIVATE_COMMENT': 'TextEdit', 'MEDIA_HAS_MEDIA': 'TextEdit', 'ANONYMOUS': 'TextEdit', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'TextEdit', 'PROTOCOL': 'TextEdit', 'HAS_DEATH_INFO': 'TextEdit', 'INSERT_DATE': 'TextEdit', 'UPDATE_DATE': 'TextEdit', });
lyr_Grille_3.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_Intersection_4.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'nom_m': 'TextEdit', 'insee_com': 'TextEdit', 'statut': 'TextEdit', 'population': 'Range', 'insee_can': 'TextEdit', 'insee_arr': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'siren_epci': 'TextEdit', 'id_2': 'TextEdit', 'nom_m_2': 'TextEdit', 'nom_2': 'TextEdit', 'insee_dep_2': 'TextEdit', 'insee_reg_2': 'TextEdit', });
lyr_donnees_hirondellef31_1.set('fieldLabels', {'ID_SIGHTING': 'no label', 'ID_SPECIES': 'no label', 'NAME_SPECIES': 'no label', 'LATIN_SPECIES': 'no label', 'TAXONOMY_NAME': 'no label', 'FAMILY_NAME': 'no label', 'SYS_ORDER': 'no label', 'DATE': 'no label', 'TIMING': 'no label', 'ID_FORM': 'no label', 'TIME_START': 'no label', 'TIME_STOP': 'no label', 'FULL_FORM': 'no label', 'DAILY_TEXT_COMMENT_REM': 'no label', 'ID_PLACE': 'no label', 'PLACE': 'no label', 'MUNICIPALITY': 'no label', 'COUNTY': 'no label', 'COUNTRY': 'no label', 'COORD_LAT': 'no label', 'COORD_LON': 'no label', 'GRID_NAME': 'no label', 'PRECISION': 'no label', 'ALTITUDE': 'no label', 'ESTIMATION_CODE': 'no label', 'TOTAL_COUNT': 'no label', 'DETAIL': 'no label', 'ATLAS_CODE': 'no label', 'BEHAVIOUR': 'no label', 'SECOND_HAND': 'no label', 'HIDDEN': 'no label', 'ADMIN_HIDDEN': 'no label', 'COMMENT': 'no label', 'PRIVATE_COMMENT': 'no label', 'MEDIA_HAS_MEDIA': 'no label', 'ANONYMOUS': 'no label', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'no label', 'PROTOCOL': 'no label', 'HAS_DEATH_INFO': 'no label', 'INSERT_DATE': 'no label', 'UPDATE_DATE': 'no label', });
lyr_donnees_martinetnoir31_2.set('fieldLabels', {'ID_SIGHTING': 'no label', 'ID_SPECIES': 'no label', 'NAME_SPECIES': 'no label', 'LATIN_SPECIES': 'no label', 'TAXONOMY_NAME': 'no label', 'FAMILY_NAME': 'no label', 'SYS_ORDER': 'no label', 'DATE': 'no label', 'TIMING': 'no label', 'ID_FORM': 'no label', 'TIME_START': 'no label', 'TIME_STOP': 'no label', 'FULL_FORM': 'no label', 'DAILY_TEXT_COMMENT_REM': 'no label', 'ID_PLACE': 'no label', 'PLACE': 'no label', 'MUNICIPALITY': 'no label', 'COUNTY': 'no label', 'COUNTRY': 'no label', 'COORD_LAT': 'no label', 'COORD_LON': 'no label', 'GRID_NAME': 'no label', 'PRECISION': 'no label', 'ALTITUDE': 'no label', 'ESTIMATION_CODE': 'no label', 'TOTAL_COUNT': 'no label', 'DETAIL': 'no label', 'ATLAS_CODE': 'no label', 'BEHAVIOUR': 'no label', 'SECOND_HAND': 'no label', 'HIDDEN': 'no label', 'ADMIN_HIDDEN': 'no label', 'COMMENT': 'no label', 'PRIVATE_COMMENT': 'no label', 'MEDIA_HAS_MEDIA': 'no label', 'ANONYMOUS': 'no label', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'no label', 'PROTOCOL': 'no label', 'HAS_DEATH_INFO': 'no label', 'INSERT_DATE': 'no label', 'UPDATE_DATE': 'no label', });
lyr_Grille_3.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Intersection_4.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'nom_m': 'no label', 'insee_com': 'no label', 'statut': 'no label', 'population': 'no label', 'insee_can': 'no label', 'insee_arr': 'no label', 'insee_dep': 'no label', 'insee_reg': 'no label', 'siren_epci': 'no label', 'id_2': 'no label', 'nom_m_2': 'no label', 'nom_2': 'no label', 'insee_dep_2': 'no label', 'insee_reg_2': 'no label', });
lyr_Intersection_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});