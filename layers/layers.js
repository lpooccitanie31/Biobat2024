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
                            opacity: 0.445000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNj1_1, 0]);
var format_Mailles_2 = new ol.format.GeoJSON();
var features_Mailles_2 = format_Mailles_2.readFeatures(json_Mailles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mailles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mailles_2.addFeatures(features_Mailles_2);
var lyr_Mailles_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mailles_2, 
                style: style_Mailles_2,
                interactive: true,
                title: '<img src="styles/legend/Mailles_2.png" /> Mailles'
            });
var format_Communes_3 = new ol.format.GeoJSON();
var features_Communes_3 = format_Communes_3.readFeatures(json_Communes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_3.addFeatures(features_Communes_3);
var lyr_Communes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_3, 
                style: style_Communes_3,
                interactive: false,
                title: '<img src="styles/legend/Communes_3.png" /> Communes'
            });
var format_Martinetsnoirs_4 = new ol.format.GeoJSON();
var features_Martinetsnoirs_4 = format_Martinetsnoirs_4.readFeatures(json_Martinetsnoirs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Martinetsnoirs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Martinetsnoirs_4.addFeatures(features_Martinetsnoirs_4);
var lyr_Martinetsnoirs_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Martinetsnoirs_4, 
                style: style_Martinetsnoirs_4,
                interactive: true,
                title: '<img src="styles/legend/Martinetsnoirs_4.png" /> Martinets noirs'
            });
var format_Hirondellesdefentre_5 = new ol.format.GeoJSON();
var features_Hirondellesdefentre_5 = format_Hirondellesdefentre_5.readFeatures(json_Hirondellesdefentre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hirondellesdefentre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hirondellesdefentre_5.addFeatures(features_Hirondellesdefentre_5);cluster_Hirondellesdefentre_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hirondellesdefentre_5
});
var lyr_Hirondellesdefentre_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Hirondellesdefentre_5, 
                style: style_Hirondellesdefentre_5,
                interactive: false,
                title: '<img src="styles/legend/Hirondellesdefentre_5.png" /> Hirondelles de fenêtre'
            });
var format_Hirondellesdefentre2022_6 = new ol.format.GeoJSON();
var features_Hirondellesdefentre2022_6 = format_Hirondellesdefentre2022_6.readFeatures(json_Hirondellesdefentre2022_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hirondellesdefentre2022_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hirondellesdefentre2022_6.addFeatures(features_Hirondellesdefentre2022_6);cluster_Hirondellesdefentre2022_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hirondellesdefentre2022_6
});
var lyr_Hirondellesdefentre2022_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Hirondellesdefentre2022_6, 
                style: style_Hirondellesdefentre2022_6,
                interactive: false,
                title: '<img src="styles/legend/Hirondellesdefentre2022_6.png" /> Hirondelles de fenêtre 2022'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_PlanIGNj1_1.setVisible(true);lyr_Mailles_2.setVisible(true);lyr_Communes_3.setVisible(true);lyr_Martinetsnoirs_4.setVisible(true);lyr_Hirondellesdefentre_5.setVisible(true);lyr_Hirondellesdefentre2022_6.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_PlanIGNj1_1,lyr_Mailles_2,lyr_Communes_3,lyr_Martinetsnoirs_4,lyr_Hirondellesdefentre_5,lyr_Hirondellesdefentre2022_6];
lyr_Mailles_2.set('fieldAliases', {'id': 'Identifiant', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Communes_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'nom_m': 'nom_m', 'insee_com': 'insee_com', 'statut': 'statut', 'population': 'population', 'insee_can': 'insee_can', 'insee_arr': 'insee_arr', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', 'siren_epci': 'siren_epci', 'id_2': 'id_2', 'nom_m_2': 'nom_m_2', 'nom_2': 'nom_2', 'insee_dep_': 'insee_dep_', 'insee_reg_': 'insee_reg_', });
lyr_Martinetsnoirs_4.set('fieldAliases', {'ID_SIGHTING': 'ID_SIGHTING', 'ID_SPECIES': 'ID_SPECIES', 'NAME_SPECIES': 'NAME_SPECIES', 'LATIN_SPECIES': 'LATIN_SPECIES', 'TAXONOMY_NAME': 'TAXONOMY_NAME', 'FAMILY_NAME': 'FAMILY_NAME', 'SYS_ORDER': 'SYS_ORDER', 'DATE': 'DATE', 'TIMING': 'TIMING', 'ID_FORM': 'ID_FORM', 'TIME_START': 'TIME_START', 'TIME_STOP': 'TIME_STOP', 'FULL_FORM': 'FULL_FORM', 'DAILY_TEXT_COMMENT_REM': 'DAILY_TEXT_COMMENT_REM', 'ID_PLACE': 'ID_PLACE', 'PLACE': 'PLACE', 'MUNICIPALITY': 'MUNICIPALITY', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'COORD_LAT': 'COORD_LAT', 'COORD_LON': 'COORD_LON', 'GRID_NAME': 'GRID_NAME', 'PRECISION': 'PRECISION', 'ALTITUDE': 'ALTITUDE', 'ESTIMATION_CODE': 'ESTIMATION_CODE', 'TOTAL_COUNT': 'TOTAL_COUNT', 'DETAIL': 'DETAIL', 'ATLAS_CODE': 'ATLAS_CODE', 'BEHAVIOUR': 'BEHAVIOUR', 'SECOND_HAND': 'SECOND_HAND', 'HIDDEN': 'HIDDEN', 'ADMIN_HIDDEN': 'ADMIN_HIDDEN', 'COMMENT': 'COMMENT', 'PRIVATE_COMMENT': 'PRIVATE_COMMENT', 'MEDIA_HAS_MEDIA': 'MEDIA_HAS_MEDIA', 'ANONYMOUS': 'ANONYMOUS', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'SEARCH_EXPORT_ENTITY_FULL_NAME', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME', 'PROTOCOL': 'PROTOCOL', 'HAS_DEATH_INFO': 'HAS_DEATH_INFO', 'INSERT_DATE': 'INSERT_DATE', 'UPDATE_DATE': 'UPDATE_DATE', });
lyr_Hirondellesdefentre_5.set('fieldAliases', {'ID_SIGHTING': 'ID_SIGHTING', 'ID_SPECIES': 'ID_SPECIES', 'NAME_SPECIES': 'NAME_SPECIES', 'LATIN_SPECIES': 'LATIN_SPECIES', 'TAXONOMY_NAME': 'TAXONOMY_NAME', 'FAMILY_NAME': 'FAMILY_NAME', 'SYS_ORDER': 'SYS_ORDER', 'DATE': 'DATE', 'TIMING': 'TIMING', 'ID_FORM': 'ID_FORM', 'TIME_START': 'TIME_START', 'TIME_STOP': 'TIME_STOP', 'FULL_FORM': 'FULL_FORM', 'DAILY_TEXT_COMMENT_REM': 'DAILY_TEXT_COMMENT_REM', 'ID_PLACE': 'ID_PLACE', 'PLACE': 'PLACE', 'MUNICIPALITY': 'MUNICIPALITY', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'COORD_LAT': 'COORD_LAT', 'COORD_LON': 'COORD_LON', 'GRID_NAME': 'GRID_NAME', 'PRECISION': 'PRECISION', 'ALTITUDE': 'ALTITUDE', 'ESTIMATION_CODE': 'ESTIMATION_CODE', 'TOTAL_COUNT': 'TOTAL_COUNT', 'DETAIL': 'DETAIL', 'ATLAS_CODE': 'ATLAS_CODE', 'BEHAVIOUR': 'BEHAVIOUR', 'SECOND_HAND': 'SECOND_HAND', 'HIDDEN': 'HIDDEN', 'ADMIN_HIDDEN': 'ADMIN_HIDDEN', 'COMMENT': 'COMMENT', 'PRIVATE_COMMENT': 'PRIVATE_COMMENT', 'MEDIA_HAS_MEDIA': 'MEDIA_HAS_MEDIA', 'ANONYMOUS': 'ANONYMOUS', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'SEARCH_EXPORT_ENTITY_FULL_NAME', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME', 'PROTOCOL': 'PROTOCOL', 'HAS_DEATH_INFO': 'HAS_DEATH_INFO', 'INSERT_DATE': 'INSERT_DATE', 'UPDATE_DATE': 'UPDATE_DATE', });
lyr_Hirondellesdefentre2022_6.set('fieldAliases', {'Nom espece': 'Nom espece', 'Date': 'Date', 'Commune': 'Commune', 'Nom rue et n°': 'Nom rue et n°', 'Nbre de nids': 'Nbre de nids', 'Nbr total nids occupÃ©s': 'Nbr total nids occupÃ©s', 'Nbre de nids dÃ©truits': 'Nbre de nids dÃ©truits', 'latitude': 'latitude', 'longitude': 'longitude', 'erreur': 'erreur', });
lyr_Mailles_2.set('fieldImages', {'id': 'TextEdit', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', });
lyr_Communes_3.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'nom_m': 'TextEdit', 'insee_com': 'TextEdit', 'statut': 'TextEdit', 'population': 'Range', 'insee_can': 'TextEdit', 'insee_arr': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'siren_epci': 'TextEdit', 'id_2': 'TextEdit', 'nom_m_2': 'TextEdit', 'nom_2': 'TextEdit', 'insee_dep_': '', 'insee_reg_': '', });
lyr_Martinetsnoirs_4.set('fieldImages', {'ID_SIGHTING': 'TextEdit', 'ID_SPECIES': 'TextEdit', 'NAME_SPECIES': 'TextEdit', 'LATIN_SPECIES': 'TextEdit', 'TAXONOMY_NAME': 'TextEdit', 'FAMILY_NAME': 'TextEdit', 'SYS_ORDER': 'TextEdit', 'DATE': 'TextEdit', 'TIMING': 'TextEdit', 'ID_FORM': 'TextEdit', 'TIME_START': 'TextEdit', 'TIME_STOP': 'TextEdit', 'FULL_FORM': 'TextEdit', 'DAILY_TEXT_COMMENT_REM': 'TextEdit', 'ID_PLACE': 'TextEdit', 'PLACE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'COORD_LAT': 'TextEdit', 'COORD_LON': 'TextEdit', 'GRID_NAME': 'TextEdit', 'PRECISION': 'TextEdit', 'ALTITUDE': 'TextEdit', 'ESTIMATION_CODE': 'TextEdit', 'TOTAL_COUNT': 'TextEdit', 'DETAIL': 'TextEdit', 'ATLAS_CODE': 'TextEdit', 'BEHAVIOUR': 'TextEdit', 'SECOND_HAND': 'TextEdit', 'HIDDEN': 'TextEdit', 'ADMIN_HIDDEN': 'TextEdit', 'COMMENT': 'TextEdit', 'PRIVATE_COMMENT': 'TextEdit', 'MEDIA_HAS_MEDIA': 'TextEdit', 'ANONYMOUS': 'TextEdit', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'TextEdit', 'PROTOCOL': 'TextEdit', 'HAS_DEATH_INFO': 'TextEdit', 'INSERT_DATE': 'TextEdit', 'UPDATE_DATE': 'TextEdit', });
lyr_Hirondellesdefentre_5.set('fieldImages', {'ID_SIGHTING': 'TextEdit', 'ID_SPECIES': 'TextEdit', 'NAME_SPECIES': 'TextEdit', 'LATIN_SPECIES': 'TextEdit', 'TAXONOMY_NAME': 'TextEdit', 'FAMILY_NAME': 'TextEdit', 'SYS_ORDER': 'TextEdit', 'DATE': 'TextEdit', 'TIMING': 'TextEdit', 'ID_FORM': 'TextEdit', 'TIME_START': 'TextEdit', 'TIME_STOP': 'TextEdit', 'FULL_FORM': 'TextEdit', 'DAILY_TEXT_COMMENT_REM': 'TextEdit', 'ID_PLACE': 'TextEdit', 'PLACE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'COORD_LAT': 'TextEdit', 'COORD_LON': 'TextEdit', 'GRID_NAME': 'TextEdit', 'PRECISION': 'TextEdit', 'ALTITUDE': 'TextEdit', 'ESTIMATION_CODE': 'TextEdit', 'TOTAL_COUNT': 'TextEdit', 'DETAIL': 'TextEdit', 'ATLAS_CODE': 'TextEdit', 'BEHAVIOUR': 'TextEdit', 'SECOND_HAND': 'TextEdit', 'HIDDEN': 'TextEdit', 'ADMIN_HIDDEN': 'TextEdit', 'COMMENT': 'TextEdit', 'PRIVATE_COMMENT': 'TextEdit', 'MEDIA_HAS_MEDIA': 'TextEdit', 'ANONYMOUS': 'TextEdit', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'TextEdit', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'TextEdit', 'PROTOCOL': 'TextEdit', 'HAS_DEATH_INFO': 'TextEdit', 'INSERT_DATE': 'TextEdit', 'UPDATE_DATE': 'TextEdit', });
lyr_Hirondellesdefentre2022_6.set('fieldImages', {'Nom espece': 'TextEdit', 'Date': 'TextEdit', 'Commune': 'TextEdit', 'Nom rue et n°': 'TextEdit', 'Nbre de nids': 'TextEdit', 'Nbr total nids occupÃ©s': 'TextEdit', 'Nbre de nids dÃ©truits': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'erreur': 'TextEdit', });
lyr_Mailles_2.set('fieldLabels', {'id': 'header label - always visible', });
lyr_Communes_3.set('fieldLabels', {'id': 'no label', 'nom': 'header label - always visible', 'nom_m': 'no label', 'insee_com': 'no label', 'statut': 'no label', 'population': 'no label', 'insee_can': 'no label', 'insee_arr': 'no label', 'insee_dep': 'no label', 'insee_reg': 'no label', 'siren_epci': 'no label', 'id_2': 'no label', 'nom_m_2': 'no label', 'nom_2': 'no label', 'insee_dep_': 'no label', 'insee_reg_': 'no label', });
lyr_Martinetsnoirs_4.set('fieldLabels', {'ID_SIGHTING': 'no label', 'ID_SPECIES': 'no label', 'NAME_SPECIES': 'header label - visible with data', 'LATIN_SPECIES': 'no label', 'TAXONOMY_NAME': 'no label', 'FAMILY_NAME': 'no label', 'SYS_ORDER': 'no label', 'DATE': 'no label', 'TIMING': 'no label', 'ID_FORM': 'no label', 'TIME_START': 'no label', 'TIME_STOP': 'no label', 'FULL_FORM': 'no label', 'DAILY_TEXT_COMMENT_REM': 'no label', 'ID_PLACE': 'no label', 'PLACE': 'no label', 'MUNICIPALITY': 'no label', 'COUNTY': 'no label', 'COUNTRY': 'no label', 'COORD_LAT': 'no label', 'COORD_LON': 'no label', 'GRID_NAME': 'no label', 'PRECISION': 'no label', 'ALTITUDE': 'no label', 'ESTIMATION_CODE': 'no label', 'TOTAL_COUNT': 'no label', 'DETAIL': 'no label', 'ATLAS_CODE': 'no label', 'BEHAVIOUR': 'no label', 'SECOND_HAND': 'no label', 'HIDDEN': 'no label', 'ADMIN_HIDDEN': 'no label', 'COMMENT': 'no label', 'PRIVATE_COMMENT': 'no label', 'MEDIA_HAS_MEDIA': 'no label', 'ANONYMOUS': 'no label', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'no label', 'PROTOCOL': 'no label', 'HAS_DEATH_INFO': 'no label', 'INSERT_DATE': 'no label', 'UPDATE_DATE': 'no label', });
lyr_Hirondellesdefentre_5.set('fieldLabels', {'ID_SIGHTING': 'no label', 'ID_SPECIES': 'no label', 'NAME_SPECIES': 'header label - visible with data', 'LATIN_SPECIES': 'no label', 'TAXONOMY_NAME': 'no label', 'FAMILY_NAME': 'no label', 'SYS_ORDER': 'no label', 'DATE': 'no label', 'TIMING': 'no label', 'ID_FORM': 'no label', 'TIME_START': 'no label', 'TIME_STOP': 'no label', 'FULL_FORM': 'no label', 'DAILY_TEXT_COMMENT_REM': 'no label', 'ID_PLACE': 'no label', 'PLACE': 'no label', 'MUNICIPALITY': 'no label', 'COUNTY': 'no label', 'COUNTRY': 'no label', 'COORD_LAT': 'no label', 'COORD_LON': 'no label', 'GRID_NAME': 'no label', 'PRECISION': 'no label', 'ALTITUDE': 'no label', 'ESTIMATION_CODE': 'no label', 'TOTAL_COUNT': 'no label', 'DETAIL': 'no label', 'ATLAS_CODE': 'no label', 'BEHAVIOUR': 'no label', 'SECOND_HAND': 'no label', 'HIDDEN': 'no label', 'ADMIN_HIDDEN': 'no label', 'COMMENT': 'no label', 'PRIVATE_COMMENT': 'no label', 'MEDIA_HAS_MEDIA': 'no label', 'ANONYMOUS': 'no label', 'SEARCH_EXPORT_ENTITY_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_FULL_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_SHORT_NAME': 'no label', 'SEARCH_EXPORT_ENTITY_TRA_FULL_NAME': 'no label', 'PROTOCOL': 'no label', 'HAS_DEATH_INFO': 'no label', 'INSERT_DATE': 'no label', 'UPDATE_DATE': 'no label', });
lyr_Hirondellesdefentre2022_6.set('fieldLabels', {'Nom espece': 'header label - visible with data', 'Date': 'no label', 'Commune': 'no label', 'Nom rue et n°': 'no label', 'Nbre de nids': 'no label', 'Nbr total nids occupÃ©s': 'no label', 'Nbre de nids dÃ©truits': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'erreur': 'no label', });
lyr_Hirondellesdefentre2022_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});