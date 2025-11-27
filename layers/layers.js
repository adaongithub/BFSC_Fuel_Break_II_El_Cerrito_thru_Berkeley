var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1 = new ol.format.GeoJSON();
var features_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1 = format_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.readFeatures(json_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.addFeatures(features_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1);
var lyr_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1, 
                style: style_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1,
                popuplayertitle: 'nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_,25_miles_styled',
                interactive: true,
                title: '<img src="styles/legend/nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.png" /> nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_,25_miles_styled'
            });
var format_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2 = new ol.format.GeoJSON();
var features_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2 = format_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.readFeatures(json_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.addFeatures(features_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2);
var lyr_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2, 
                style: style_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2,
                popuplayertitle: 'nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_,25_miles_styled',
                interactive: true,
                title: '<img src="styles/legend/nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.png" /> nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_,25_miles_styled'
            });
var format_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3 = new ol.format.GeoJSON();
var features_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3 = format_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.readFeatures(json_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.addFeatures(features_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3);
var lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3, 
                style: style_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3,
                popuplayertitle: 'Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled',
                interactive: false,
                title: '<img src="styles/legend/Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.png" /> Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled'
            });
var format_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4 = new ol.format.GeoJSON();
var features_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4 = format_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.readFeatures(json_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.addFeatures(features_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4);
var lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4, 
                style: style_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4,
                popuplayertitle: 'Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_.25_miles_styled',
                interactive: false,
                title: '<img src="styles/legend/Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.png" /> Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_.25_miles_styled'
            });
var group_Fuel_Break_II_ElC_K_B = new ol.layer.Group({
                                layers: [lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3,lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4,],
                                fold: 'open',
                                title: 'Fuel_Break_II_ElC_K_B'});
var group_FuelBreakIIBerkeleyonly = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Fuel Break II Berkeley only'});
var group_FuelBreakIIElCerritothruKensington = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Fuel Break II El Cerrito thru Kensington'});
var group_Est_structure_line_K_B_GPBlvd_Dissolved_Connected = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Est_structure_line_K_B_GPBlvd_Dissolved_Connected'});
var group_Using_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles = new ol.layer.Group({
                                layers: [lyr_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1,],
                                fold: 'open',
                                title: 'Using_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_.25_miles'});
var group_OLD_Using_Est_structure_line_K_B_GPBlvd_Dissolved_Connected_EPSG_7132_Buffered_25_miles = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OLD_Using_Est_structure_line_K_B_GPBlvd_Dissolved_Connected_EPSG_7132_Buffered_.25_miles'});
var group_Alameda_County = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Alameda_County'});
var group_Contra_Costa_County = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Contra_Costa_County'});

lyr_OSMStandard_0.setVisible(true);lyr_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.setVisible(true);lyr_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.setVisible(true);lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.setVisible(true);lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Using_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles,lyr_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2,group_Fuel_Break_II_ElC_K_B];
lyr_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.set('fieldAliases', {'fid': 'fid', 'fd_id': 'fd_id', 'bid': 'bid', 'cbfips': 'cbfips', 'st_damcat': 'st_damcat', 'occtype': 'occtype', 'bldgtype': 'bldgtype', 'num_story': 'num_story', 'sqft': 'sqft', 'found_type': 'found_type', 'found_ht': 'found_ht', 'med_yr_blt': 'med_yr_blt', 'val_struct': 'val_struct', 'val_cont': 'val_cont', 'val_vehic': 'val_vehic', 'ftprntid': 'ftprntid', 'ftprntsrc': 'ftprntsrc', 'source': 'source', 'students': 'students', 'pop2amu65': 'pop2amu65', 'pop2amo65': 'pop2amo65', 'pop2pmu65': 'pop2pmu65', 'pop2pmo65': 'pop2pmo65', 'o65disable': 'o65disable', 'u65disable': 'u65disable', 'x': 'x', 'y': 'y', 'firmzone': 'firmzone', 'grnd_elv_m': 'grnd_elv_m', 'ground_elv': 'ground_elv', });
lyr_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.set('fieldAliases', {'fid': 'fid', 'fd_id': 'fd_id', 'bid': 'bid', 'cbfips': 'cbfips', 'st_damcat': 'st_damcat', 'occtype': 'occtype', 'bldgtype': 'bldgtype', 'num_story': 'num_story', 'sqft': 'sqft', 'found_type': 'found_type', 'found_ht': 'found_ht', 'med_yr_blt': 'med_yr_blt', 'val_struct': 'val_struct', 'val_cont': 'val_cont', 'val_vehic': 'val_vehic', 'ftprntid': 'ftprntid', 'ftprntsrc': 'ftprntsrc', 'source': 'source', 'students': 'students', 'pop2amu65': 'pop2amu65', 'pop2amo65': 'pop2amo65', 'pop2pmu65': 'pop2pmu65', 'pop2pmo65': 'pop2pmo65', 'o65disable': 'o65disable', 'u65disable': 'u65disable', 'x': 'x', 'y': 'y', 'firmzone': 'firmzone', 'grnd_elv_m': 'grnd_elv_m', 'ground_elv': 'ground_elv', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'x': 'x', 'y': 'y', 'layer': 'layer', 'path': 'path', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'x': 'x', 'y': 'y', 'layer': 'layer', 'path': 'path', });
lyr_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.set('fieldImages', {'fid': '', 'fd_id': '', 'bid': '', 'cbfips': '', 'st_damcat': '', 'occtype': '', 'bldgtype': '', 'num_story': '', 'sqft': '', 'found_type': '', 'found_ht': '', 'med_yr_blt': '', 'val_struct': '', 'val_cont': '', 'val_vehic': '', 'ftprntid': '', 'ftprntsrc': '', 'source': '', 'students': '', 'pop2amu65': '', 'pop2amo65': '', 'pop2pmu65': '', 'pop2pmo65': '', 'o65disable': '', 'u65disable': '', 'x': '', 'y': '', 'firmzone': '', 'grnd_elv_m': '', 'ground_elv': '', });
lyr_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.set('fieldImages', {'fid': 'TextEdit', 'fd_id': 'Range', 'bid': 'TextEdit', 'cbfips': 'TextEdit', 'st_damcat': 'TextEdit', 'occtype': 'TextEdit', 'bldgtype': 'TextEdit', 'num_story': 'TextEdit', 'sqft': 'TextEdit', 'found_type': 'TextEdit', 'found_ht': 'TextEdit', 'med_yr_blt': 'Range', 'val_struct': 'TextEdit', 'val_cont': 'TextEdit', 'val_vehic': 'TextEdit', 'ftprntid': 'TextEdit', 'ftprntsrc': 'TextEdit', 'source': 'TextEdit', 'students': 'Range', 'pop2amu65': 'Range', 'pop2amo65': 'Range', 'pop2pmu65': 'Range', 'pop2pmo65': 'Range', 'o65disable': 'TextEdit', 'u65disable': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'firmzone': 'TextEdit', 'grnd_elv_m': 'TextEdit', 'ground_elv': 'TextEdit', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_nsi_2022_06_CA_Contra_Costa_Cnty_ElC_K_B_Buffered_25_miles_styled_1.set('fieldLabels', {'fid': 'no label', 'fd_id': 'no label', 'bid': 'no label', 'cbfips': 'no label', 'st_damcat': 'no label', 'occtype': 'no label', 'bldgtype': 'no label', 'num_story': 'no label', 'sqft': 'no label', 'found_type': 'no label', 'found_ht': 'no label', 'med_yr_blt': 'no label', 'val_struct': 'no label', 'val_cont': 'no label', 'val_vehic': 'no label', 'ftprntid': 'no label', 'ftprntsrc': 'no label', 'source': 'no label', 'students': 'no label', 'pop2amu65': 'no label', 'pop2amo65': 'no label', 'pop2pmu65': 'no label', 'pop2pmo65': 'no label', 'o65disable': 'no label', 'u65disable': 'no label', 'x': 'no label', 'y': 'no label', 'firmzone': 'no label', 'grnd_elv_m': 'no label', 'ground_elv': 'no label', });
lyr_nsi_2022_06_CA_Alameda_Cnty_ElC_K_B_Buffered_25_miles_styled_2.set('fieldLabels', {'fid': 'no label', 'fd_id': 'no label', 'bid': 'no label', 'cbfips': 'no label', 'st_damcat': 'no label', 'occtype': 'no label', 'bldgtype': 'no label', 'num_story': 'no label', 'sqft': 'no label', 'found_type': 'no label', 'found_ht': 'no label', 'med_yr_blt': 'no label', 'val_struct': 'no label', 'val_cont': 'no label', 'val_vehic': 'no label', 'ftprntid': 'no label', 'ftprntsrc': 'no label', 'source': 'no label', 'students': 'no label', 'pop2amu65': 'no label', 'pop2amo65': 'no label', 'pop2pmu65': 'no label', 'pop2pmo65': 'no label', 'o65disable': 'no label', 'u65disable': 'no label', 'x': 'no label', 'y': 'no label', 'firmzone': 'no label', 'grnd_elv_m': 'no label', 'ground_elv': 'no label', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_styled_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'x': 'no label', 'y': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'x': 'no label', 'y': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Lower_limit_of_fuel_break_ElC_K_B_7132_MergeVL_Dissolved_Buffered_25_miles_styled_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});