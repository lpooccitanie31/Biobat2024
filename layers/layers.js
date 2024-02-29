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
var lyr_PlanIGNj1_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/cartes/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plan IGN j+1",
                            opacity: 0.626000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNj1_1, 0]);
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: "Communes",
                interactive: false,
                title: '<img src="styles/legend/Communes_2.png" /> Communes'
            });
var format_Mailles_3 = new ol.format.GeoJSON();
var features_Mailles_3 = format_Mailles_3.readFeatures(json_Mailles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mailles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mailles_3.addFeatures(features_Mailles_3);
var lyr_Mailles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mailles_3, 
                style: style_Mailles_3,
                popuplayertitle: "Mailles",
                interactive: true,
                title: '<img src="styles/legend/Mailles_3.png" /> Mailles'
            });
var format_DPE_4 = new ol.format.GeoJSON();
var features_DPE_4 = format_DPE_4.readFeatures(json_DPE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPE_4.addFeatures(features_DPE_4);
var lyr_DPE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPE_4, 
                style: style_DPE_4,
                popuplayertitle: "DPE",
                interactive: false,
    title: 'DPE<br />\
    <img src="styles/legend/DPE_4_0.png" /> E<br />\
    <img src="styles/legend/DPE_4_1.png" /> F<br />\
    <img src="styles/legend/DPE_4_2.png" /> G<br />\
    <img src="styles/legend/DPE_4_3.png" /> H<br />\
    <img src="styles/legend/DPE_4_4.png" /> <br />'
        });
var format_Martinetsnoirs_5 = new ol.format.GeoJSON();
var features_Martinetsnoirs_5 = format_Martinetsnoirs_5.readFeatures(json_Martinetsnoirs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Martinetsnoirs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Martinetsnoirs_5.addFeatures(features_Martinetsnoirs_5);cluster_Martinetsnoirs_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Martinetsnoirs_5
});
var lyr_Martinetsnoirs_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Martinetsnoirs_5, 
                style: style_Martinetsnoirs_5,
                popuplayertitle: "Martinets noirs",
                interactive: false,
                title: '<img src="styles/legend/Martinetsnoirs_5.png" /> Martinets noirs'
            });
var format_Hirondellesdefentre_6 = new ol.format.GeoJSON();
var features_Hirondellesdefentre_6 = format_Hirondellesdefentre_6.readFeatures(json_Hirondellesdefentre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hirondellesdefentre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hirondellesdefentre_6.addFeatures(features_Hirondellesdefentre_6);cluster_Hirondellesdefentre_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hirondellesdefentre_6
});
var lyr_Hirondellesdefentre_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Hirondellesdefentre_6, 
                style: style_Hirondellesdefentre_6,
                popuplayertitle: "Hirondelles de fenêtre",
                interactive: false,
                title: '<img src="styles/legend/Hirondellesdefentre_6.png" /> Hirondelles de fenêtre'
            });
var format_Hirondellesdefentre2022_7 = new ol.format.GeoJSON();
var features_Hirondellesdefentre2022_7 = format_Hirondellesdefentre2022_7.readFeatures(json_Hirondellesdefentre2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hirondellesdefentre2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hirondellesdefentre2022_7.addFeatures(features_Hirondellesdefentre2022_7);cluster_Hirondellesdefentre2022_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hirondellesdefentre2022_7
});
var lyr_Hirondellesdefentre2022_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Hirondellesdefentre2022_7, 
                style: style_Hirondellesdefentre2022_7,
                popuplayertitle: "Hirondelles de fenêtre 2022",
                interactive: false,
                title: '<img src="styles/legend/Hirondellesdefentre2022_7.png" /> Hirondelles de fenêtre 2022'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_PlanIGNj1_1.setVisible(true);lyr_Communes_2.setVisible(true);lyr_Mailles_3.setVisible(true);lyr_DPE_4.setVisible(true);lyr_Martinetsnoirs_5.setVisible(true);lyr_Hirondellesdefentre_6.setVisible(true);lyr_Hirondellesdefentre2022_7.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_PlanIGNj1_1,lyr_Communes_2,lyr_Mailles_3,lyr_DPE_4,lyr_Martinetsnoirs_5,lyr_Hirondellesdefentre_6,lyr_Hirondellesdefentre2022_7];
lyr_Communes_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'nom_m': 'nom_m', 'insee_com': 'insee_com', 'statut': 'statut', 'population': 'population', 'insee_can': 'insee_can', 'insee_arr': 'insee_arr', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', 'siren_epci': 'siren_epci', 'id_2': 'id_2', 'nom_m_2': 'nom_m_2', 'nom_2': 'nom_2', 'insee_dep_': 'insee_dep_', 'insee_reg_': 'insee_reg_', });
lyr_Mailles_3.set('fieldAliases', {'Numéro': 'Numéro', });
lyr_DPE_4.set('fieldAliases', {'classe_consommation_energie': 'classe_consommation_energie', 'latitude': 'latitude', 'longitude': 'longitude', 'departement': 'departement', });
lyr_Martinetsnoirs_5.set('fieldAliases', {'ID_SIGHTING': 'ID_SIGHTING', 'ID_SPECIES': 'ID_SPECIES', 'NAME_SPECIES': 'NAME_SPECIES', 'LATIN_SPECIES': 'LATIN_SPECIES', 'TAXONOMY_NAME': 'TAXONOMY_NAME', 'FAMILY_NAME': 'FAMILY_NAME', 'SYS_ORDER': 'SYS_ORDER', 'DATE': 'DATE', 'TIMING': 'TIMING', 'ID_FORM': 'ID_FORM', 'TIME_START': 'TIME_START', 'TIME_STOP': 'TIME_STOP', 'FULL_FORM': 'FULL_FORM', 'DAILY_TEXT_COMMENT_REM': 'DAILY_TEXT_COMMENT_REM', 'ID_PLACE': 'ID_PLACE', 'PLACE': 'PLACE', 'MUNICIPALITY': 'MUNICIPALITY', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'COORD_LAT': 'COORD_LAT', 'COORD_LON': 'COORD_LON', 'GRID_NAME': 'GRID_NAME', 'PRECISION': 'PRECISION', 'ALTITUDE': 'ALTITUDE', 'ESTIMATION_CODE': 'ESTIMATION_CODE', 'TOTAL_COUNT': 'TOTAL_COUNT', 'DETAIL': 'DETAIL', 'ATLAS_CODE': 'ATLAS_CODE', 'BEHAVIOUR': 'BEHAVIOUR', 'SECOND_HAND': 'SECOND_HAND', 'HIDDEN': 'HIDDEN', 'ADMIN_HIDDEN': 'ADMIN_HIDDEN', 'COMMENT': 'COMMENT', 'PRIVATE_COMMENT': 'PRIVATE_COMMENT', 'MEDIA_HAS_MEDIA': 'MEDIA_HAS_MEDIA', 'ANONYMOUS': 'ANONYMOUS', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'SEARCH_EXPORT_ENTITY_FULL_NAME', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME', 'PROTOCOL': 'PROTOCOL', 'HAS_DEATH_INFO': 'HAS_DEATH_INFO', 'INSERT_DATE': 'INSERT_DATE', 'UPDATE_DATE': 'UPDATE_DATE', });
lyr_Hirondellesdefentre_6.set('fieldAliases', {'ID_SIGHTING': 'ID_SIGHTING', 'ID_SPECIES': 'ID_SPECIES', 'NAME_SPECIES': 'NAME_SPECIES', 'LATIN_SPECIES': 'LATIN_SPECIES', 'TAXONOMY_NAME': 'TAXONOMY_NAME', 'FAMILY_NAME': 'FAMILY_NAME', 'SYS_ORDER': 'SYS_ORDER', 'DATE': 'DATE', 'TIMING': 'TIMING', 'ID_FORM': 'ID_FORM', 'TIME_START': 'TIME_START', 'TIME_STOP': 'TIME_STOP', 'FULL_FORM': 'FULL_FORM', 'DAILY_TEXT_COMMENT_REM': 'DAILY_TEXT_COMMENT_REM', 'ID_PLACE': 'ID_PLACE', 'PLACE': 'PLACE', 'MUNICIPALITY': 'MUNICIPALITY', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'COORD_LAT': 'COORD_LAT', 'COORD_LON': 'COORD_LON', 'GRID_NAME': 'GRID_NAME', 'PRECISION': 'PRECISION', 'ALTITUDE': 'ALTITUDE', 'ESTIMATION_CODE': 'ESTIMATION_CODE', 'TOTAL_COUNT': 'TOTAL_COUNT', 'DETAIL': 'DETAIL', 'ATLAS_CODE': 'ATLAS_CODE', 'BEHAVIOUR': 'BEHAVIOUR', 'SECOND_HAND': 'SECOND_HAND', 'HIDDEN': 'HIDDEN', 'ADMIN_HIDDEN': 'ADMIN_HIDDEN', 'COMMENT': 'COMMENT', 'PRIVATE_COMMENT': 'PRIVATE_COMMENT', 'MEDIA_HAS_MEDIA': 'MEDIA_HAS_MEDIA', 'ANONYMOUS': 'ANONYMOUS', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'SEARCH_EXPORT_ENTITY_FULL_NAME', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME', 'PROTOCOL': 'PROTOCOL', 'HAS_DEATH_INFO': 'HAS_DEATH_INFO', 'INSERT_DATE': 'INSERT_DATE', 'UPDATE_DATE': 'UPDATE_DATE', });
lyr_Hirondellesdefentre2022_7.set('fieldAliases', {'Nom espece': 'Nom espece', 'Date': 'Date', 'Commune': 'Commune', 'Nom rue et n°': 'Nom rue et n°', 'Nbre de nids': 'Nbre de nids', 'Nbr total nids occupÃ©s': 'Nbr total nids occupÃ©s', 'Nbre de nids dÃ©truits': 'Nbre de nids dÃ©truits', 'latitude': 'latitude', 'longitude': 'longitude', 'erreur': 'erreur', });
lyr_Communes_2.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'nom_m': 'TextEdit', 'insee_com': 'TextEdit', 'statut': 'TextEdit', 'population': 'Range', 'insee_can': 'TextEdit', 'insee_arr': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'siren_epci': 'TextEdit', 'id_2': 'TextEdit', 'nom_m_2': 'TextEdit', 'nom_2': 'TextEdit', 'insee_dep_': '', 'insee_reg_': '', });
lyr_Mailles_3.set('fieldImages', {'Numéro': 'TextEdit', });
lyr_DPE_4.set('fieldImages', {'classe_consommation_energie': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'departement': 'TextEdit', });
lyr_Martinetsnoirs_5.set('fieldImages', {'ID_SIGHTING': 'TextEdit', 'ID_SPECIES': 'TextEdit', 'NAME_SPECIES': 'TextEdit', 'LATIN_SPECIES': 'TextEdit', 'TAXONOMY_NAME': 'TextEdit', 'FAMILY_NAME': 'TextEdit', 'SYS_ORDER': 'TextEdit', 'DATE': 'TextEdit', 'TIMING': 'TextEdit', 'ID_FORM': 'TextEdit', 'TIME_START': 'TextEdit', 'TIME_STOP': 'TextEdit', 'FULL_FORM': 'TextEdit', 'DAILY_TEXT_COMMENT_REM': 'TextEdit', 'ID_PLACE': 'TextEdit', 'PLACE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'COORD_LAT': 'TextEdit', 'COORD_LON': 'TextEdit', 'GRID_NAME': 'TextEdit', 'PRECISION': 'TextEdit', 'ALTITUDE': 'TextEdit', 'ESTIMATION_CODE': 'TextEdit', 'TOTAL_COUNT': 'TextEdit', 'DETAIL': 'TextEdit', 'ATLAS_CODE': 'TextEdit', 'BEHAVIOUR': 'TextEdit', 'SECOND_HAND': 'TextEdit', 'HIDDEN': 'TextEdit', 'ADMIN_HIDDEN': 'TextEdit', 'COMMENT': 'TextEdit', 'PRIVATE_COMMENT': 'TextEdit', 'MEDIA_HAS_MEDIA': 'TextEdit', 'ANONYMOUS': 'TextEdit', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'TextEdit', 'PROTOCOL': 'TextEdit', 'HAS_DEATH_INFO': 'TextEdit', 'INSERT_DATE': 'TextEdit', 'UPDATE_DATE': 'TextEdit', });
lyr_Hirondellesdefentre_6.set('fieldImages', {'ID_SIGHTING': 'TextEdit', 'ID_SPECIES': 'TextEdit', 'NAME_SPECIES': 'TextEdit', 'LATIN_SPECIES': 'TextEdit', 'TAXONOMY_NAME': 'TextEdit', 'FAMILY_NAME': 'TextEdit', 'SYS_ORDER': 'TextEdit', 'DATE': 'TextEdit', 'TIMING': 'TextEdit', 'ID_FORM': 'TextEdit', 'TIME_START': 'TextEdit', 'TIME_STOP': 'TextEdit', 'FULL_FORM': 'TextEdit', 'DAILY_TEXT_COMMENT_REM': 'TextEdit', 'ID_PLACE': 'TextEdit', 'PLACE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'COORD_LAT': 'TextEdit', 'COORD_LON': 'TextEdit', 'GRID_NAME': 'TextEdit', 'PRECISION': 'TextEdit', 'ALTITUDE': 'TextEdit', 'ESTIMATION_CODE': 'TextEdit', 'TOTAL_COUNT': 'TextEdit', 'DETAIL': 'TextEdit', 'ATLAS_CODE': 'TextEdit', 'BEHAVIOUR': 'TextEdit', 'SECOND_HAND': 'TextEdit', 'HIDDEN': 'TextEdit', 'ADMIN_HIDDEN': 'TextEdit', 'COMMENT': 'TextEdit', 'PRIVATE_COMMENT': 'TextEdit', 'MEDIA_HAS_MEDIA': 'TextEdit', 'ANONYMOUS': 'TextEdit', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'TextEdit', 'PROTOCOL': 'TextEdit', 'HAS_DEATH_INFO': 'TextEdit', 'INSERT_DATE': 'TextEdit', 'UPDATE_DATE': 'TextEdit', });
lyr_Hirondellesdefentre2022_7.set('fieldImages', {'Nom espece': 'TextEdit', 'Date': 'TextEdit', 'Commune': 'TextEdit', 'Nom rue et n°': 'TextEdit', 'Nbre de nids': 'TextEdit', 'Nbr total nids occupÃ©s': 'TextEdit', 'Nbre de nids dÃ©truits': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'erreur': 'TextEdit', });
lyr_Communes_2.set('fieldLabels', {'id': 'hidden field', 'nom': 'hidden field', 'nom_m': 'hidden field', 'insee_com': 'hidden field', 'statut': 'hidden field', 'population': 'hidden field', 'insee_can': 'hidden field', 'insee_arr': 'hidden field', 'insee_dep': 'hidden field', 'insee_reg': 'hidden field', 'siren_epci': 'hidden field', 'id_2': 'hidden field', 'nom_m_2': 'hidden field', 'nom_2': 'hidden field', 'insee_dep_': 'hidden field', 'insee_reg_': 'hidden field', });
lyr_Mailles_3.set('fieldLabels', {'Numéro': 'header label - always visible', });
lyr_DPE_4.set('fieldLabels', {'classe_consommation_energie': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'departement': 'no label', });
lyr_Martinetsnoirs_5.set('fieldLabels', {'ID_SIGHTING': 'hidden field', 'ID_SPECIES': 'hidden field', 'NAME_SPECIES': 'hidden field', 'LATIN_SPECIES': 'hidden field', 'TAXONOMY_NAME': 'hidden field', 'FAMILY_NAME': 'hidden field', 'SYS_ORDER': 'hidden field', 'DATE': 'hidden field', 'TIMING': 'hidden field', 'ID_FORM': 'hidden field', 'TIME_START': 'hidden field', 'TIME_STOP': 'hidden field', 'FULL_FORM': 'hidden field', 'DAILY_TEXT_COMMENT_REM': 'hidden field', 'ID_PLACE': 'hidden field', 'PLACE': 'hidden field', 'MUNICIPALITY': 'hidden field', 'COUNTY': 'hidden field', 'COUNTRY': 'hidden field', 'COORD_LAT': 'hidden field', 'COORD_LON': 'hidden field', 'GRID_NAME': 'hidden field', 'PRECISION': 'hidden field', 'ALTITUDE': 'hidden field', 'ESTIMATION_CODE': 'hidden field', 'TOTAL_COUNT': 'hidden field', 'DETAIL': 'hidden field', 'ATLAS_CODE': 'hidden field', 'BEHAVIOUR': 'hidden field', 'SECOND_HAND': 'hidden field', 'HIDDEN': 'hidden field', 'ADMIN_HIDDEN': 'hidden field', 'COMMENT': 'hidden field', 'PRIVATE_COMMENT': 'hidden field', 'MEDIA_HAS_MEDIA': 'hidden field', 'ANONYMOUS': 'hidden field', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'hidden field', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'hidden field', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'hidden field', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'hidden field', 'PROTOCOL': 'hidden field', 'HAS_DEATH_INFO': 'hidden field', 'INSERT_DATE': 'hidden field', 'UPDATE_DATE': 'hidden field', });
lyr_Hirondellesdefentre_6.set('fieldLabels', {'ID_SIGHTING': 'hidden field', 'ID_SPECIES': 'hidden field', 'NAME_SPECIES': 'hidden field', 'LATIN_SPECIES': 'hidden field', 'TAXONOMY_NAME': 'hidden field', 'FAMILY_NAME': 'hidden field', 'SYS_ORDER': 'hidden field', 'DATE': 'hidden field', 'TIMING': 'hidden field', 'ID_FORM': 'hidden field', 'TIME_START': 'hidden field', 'TIME_STOP': 'hidden field', 'FULL_FORM': 'hidden field', 'DAILY_TEXT_COMMENT_REM': 'hidden field', 'ID_PLACE': 'hidden field', 'PLACE': 'hidden field', 'MUNICIPALITY': 'hidden field', 'COUNTY': 'hidden field', 'COUNTRY': 'hidden field', 'COORD_LAT': 'hidden field', 'COORD_LON': 'hidden field', 'GRID_NAME': 'hidden field', 'PRECISION': 'hidden field', 'ALTITUDE': 'hidden field', 'ESTIMATION_CODE': 'hidden field', 'TOTAL_COUNT': 'hidden field', 'DETAIL': 'hidden field', 'ATLAS_CODE': 'hidden field', 'BEHAVIOUR': 'hidden field', 'SECOND_HAND': 'hidden field', 'HIDDEN': 'hidden field', 'ADMIN_HIDDEN': 'hidden field', 'COMMENT': 'hidden field', 'PRIVATE_COMMENT': 'hidden field', 'MEDIA_HAS_MEDIA': 'hidden field', 'ANONYMOUS': 'hidden field', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'hidden field', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'hidden field', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'hidden field', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'hidden field', 'PROTOCOL': 'hidden field', 'HAS_DEATH_INFO': 'hidden field', 'INSERT_DATE': 'hidden field', 'UPDATE_DATE': 'hidden field', });
lyr_Hirondellesdefentre2022_7.set('fieldLabels', {'Nom espece': 'hidden field', 'Date': 'hidden field', 'Commune': 'hidden field', 'Nom rue et n°': 'hidden field', 'Nbre de nids': 'hidden field', 'Nbr total nids occupÃ©s': 'hidden field', 'Nbre de nids dÃ©truits': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'erreur': 'hidden field', });
lyr_Hirondellesdefentre2022_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});