var geometrias_1=new Array("-","BeCl2","CO2","BeH2") 
var geometrias_2=new Array("-","H20","H2S","SCl2") 
var geometrias_3=new Array("-","BF3","C3H5","C3H6") 
var geometrias_4=new Array("-","CH4","NH3","(CIO)3-")
var geometrias_5=new Array("-","NH4+","(SO4)2-","(PO4)3-")

function cambiaGeometria(){ 
    var selec 
    selec = document.f1.selec[document.f1.selec.selectedIndex].value  
    if(selec != 0){ 
        mis_geometrias=eval("geometrias_" + selec) 
        num_geometrias = mis_geometrias.length 
        document.f1.geometria.length = num_geometrias 
        for(i=0;i<num_geometrias;i++){ 
            document.f1.geometria.options[i].value=mis_geometrias[i] 
            document.f1.geometria.options[i].text=mis_geometrias[i] 
        }   
    }
    else{  
        document.f1.geometria.length = 1  
        document.f1.geometria.options[0].value = "-" 
        document.f1.geometria.options[0].text = "-" 
    }  
    document.f1.geometria.options[0].selected = true 
}

function Hidrogeno(){
    alert(" Hidrogeno \n\n\
            Masa atomica: 1.0079\n\
            Numero atomico: 1\n\
            Configuracion electronica: 1s^1\n\
            Descubrimiento: 1766");
}

function Litio(){
    alert(" Litio \n\n\
            Masa atomica: 6.941 \n\
            Numero atomico: 3 \n\
            Configuracion electronica: [He]2s^1 \n\
            Descubrimiento: 1817");
}

function Sodio(){
    alert(" Sodio \n\n\
            Masa atomica: 22.98 \n\
            Numero atomico: 11 \n\
            Configuracion electronica: [Ne]3s^1 \n\
            Descubrimiento: 1807");
}

function Potasio(){
    alert(" Potasio \n\n\
            Masa atomica: 39.09 \n\
            Numero atomico: 19 \n\
            Configuracion electronica: [Ar]4s^1 \n\
            Descubrimiento: 1807");    
}

function Rubidio(){
    alert(" Rubidio \n\n\
            Masa atomica: 85.46 \n\
            Numero atomico: 37  \n\
            Configuracion electronica: [Kr]5s^1 \n\
            Descubrimiento: 1861");    
}

function Cesio(){
    alert(" Cesio \n\n\
            Masa atomica: 132.9 \n\
            Numero atomico: 55 \n\
            Configuracion electronica: [Xe]6s^1 \n\
            Descubrimiento: 1860");
}

function Francio(){
    alert(" Francio \n\n\
            Masa atomica: 223 \n\
            Numero atomico: 87 \n\
            Configuracion electronica: [Rn]7s^1 \n\
            Descubrimiento: 1939");
}

function Berilio(){
    alert(" Berilio \n\n\
            Masa atomica: 9.01 \n\
            Numero atomico: 4 \n\
            Configuracion electronica: [He] 2s2 \n\
            Descubrimiento: 1798");
}   

function Magnesio(){
    alert(" Magnesio \n\
            Masa atomica: 24.3 \n\
            Numero atomico: 12 \n\
            Configuracion electronica: [He] 2s2 \n\
            Descubrimiento: 1755");    
}

function Calcio(){
    alert(" Calcio \n\n\
            Masa atomica: 40.07 \n\
            Numero atomico: 20 \n\
            Configuracion electronica: [Ar] 4s2 \n\
            Descubrimiento: 1755");    
    
}

function Estroncio(){
    alert(" Estroncio \n\n\
            Masa atomica: 87.62 \n\
            Numero atomico: 38 \n\
            Configuracion electronica: [Kr] 5s2 \n\
            Descubrimiento: 1790");
}

function Bario(){
    alert(" Bario \n\n\
            Masa atomica: 137.32 \n\
            Numero atomico: 56 \n\
            Configuracion electronica: [Kr] 5s2 \n\
            Descubrimiento: 1790");   
}

function Radio(){
    alert(" Radio \n\n\
            Masa atomica: 226 \n\
            Numero atomico: 88 \n\
            Configuracion electronica: [Rn] 7s2 \n\
            Descubrimiento: 1898");       
}

function Escandio(){
    alert(" Escandio \n\n\
            Masa atomica: 44.95 \n\
            Numero atomico: 21 \n\
            Configuracion electronica: [Ar] 3d14s2 \n\
            Descubrimiento: 1879");    
}

function Itrio(){
    alert(" Itrio \n\
            Masa atomica: 88.9 \n\
            Numero atomico: 39 \n\
            Configuracion electronica: [Kr] 4d15s2 \n\
            Descubrimiento: 1794");     
}

function Titanio(){ 
    alert(" Titanio \n\n\
            Masa atomica: 47.86 \n\
            Numero atomico: 22 \n\
            Configuracion electronica: [Ar] 3d24s2 \n\
            Descubrimiento: 1791");        
}

function Circonio(){
    alert(" Circonio \n\n\
            Masa atomica: 47.86 \n\
            Numero atomico: 22 \n\
            Configuracion electronica: [Ar] 3d24s2 \n\
            Descubrimiento: 1791");    
}

function Hafnio(){
    alert(" Hafnio \n\n\
            Masa atomica: 178.49 \n\
            Numero atomico: 72 \n\
            Configuracion electronica: [Xe] 4f145d26s2 \n\
            Descubrimiento: 1923");      
}

function Rutherfordio(){
    alert(" Rutherfordio \n\n\
            Masa atomica: 261 \n\
            Numero atomico: 104 \n\
            Configuracion electronica: [Rn] 5f146d27s2 \n\
            Descubrimiento: 1964");    
}

function Lantano(){
    alert(" Lantano \n\n\
            Masa atomica: 138.90 \n\
            Numero atomico: 57 \n\
            Configuracion electronica: [Xe] 5d16s2 \n\
            Descubrimiento: 1839");    
}

function Actinio(){
    alert(" Actinio \n\n\
            Masa atomica: 227 \n\
            Numero atomico: 89 \n\
            Configuracion electronica: [Rn] 6d17s2 \n\
            Descubrimiento: 1899");     
}

function Vanadio(){
    alert(" Vanadio \n\n\
            Masa atomica: 50.94 \n\
            Numero atomico: 23 \n\
            Configuracion electronica: [Ar] 3d34s2 \n\
            Descubrimiento: 1801"); 
}

function Niobio(){
    alert(" Niobio \n\n\
            Masa atomica: 92.90 \n\
            Numero atomico: 41 \n\
            Configuracion electronica: [Kr] 4d45s1 \n\
            Descubrimiento: 1801");
}

function Tantalio(){
    alert(" Tantalio \n\n\
            Masa atomica: 180.94 \n\
            Numero atomico: 73 \n\
            Configuracion electronica: [Xe] 4f145d36s2 \n\
            Descubrimiento: 1802");
}

function Dubnio(){
    alert(" Dubnio \n\n\
            Masa atomica: 262 \n\
            Numero atomico: 105 \n\
            Configuracion electronica: [Rn] 5f146d37s2 \n\
            Descubrimiento: 1967");
}

function Cerio(){
    alert(" Cerio \n\n\
            Masa atomica: 140.11 \n\
            Numero atomico: 58 \n\
            Configuracion electronica: [Xe] 4f15d16s2 \n\
            Descubrimiento: 1803");    
}

function Torio(){
    alert(" Torio \n\
            Masa atomica: 232.03 \n\
            Numero atomico: 90 \n\
            Configuracion electronica: [Rn] 6d27s2 \n\
            Descubrimiento: 1828");     
}

function Cromo(){
    alert(" Cromo \n\n\
            Masa atomica: 51.99 \n\
            Numero atomico: 24 \n\
            Configuracion electronica: [Ar] 3d54s1 \n\
            Descubrimiento: 1797");  
}

function Molibdeno(){
    alert(" Molibdeno \n\
            Masa atomica: 95.94 \n\
            Numero atomico: 42 \n\
            Configuracion electronica: [Kr] 4d55s1 \n\
            Descubrimiento: 1778");
}

function Wolframio(){
    alert(" Wolframio \n\
            Masa atomica: 183.84 \n\
            Numero atomico: 74 \n\
            Configuracion electronica: [Xe] 4f145d46s2\n\
            Descubrimiento: 1781");
}

function Seaborgio(){
    alert(" Seaborgio \n\n\
            Masa atomica: 266  \n\
            Numero atomico: 106 \n\
            Configuracion electronica: 7s2 5f14 6d4\n\
            Descubrimiento: 1974");
}

function Praseodimio(){
    alert(" Praseodimio \n\n\
            Masa atomica: 140.9  \n\
            Numero atomico: 59 \n\
            Configuracion electronica: [Xe] 4f36s2\n\
            Descubrimiento: 1885");
}

function Protactinio(){
    alert(" Protactinio \n\n\
            Masa atomica: 231.03  \n\
            Numero atomico: 91 \n\n\
            Configuracion electronica: [Rn] 5f26d17s2\n\
            Descubrimiento: 1917");
}

function Manganeso(){
    alert(" Manganeso \n\n\
            Masa atomica: 54.93  \n\
            Numero atomico: 25 \n\
            Configuracion electronica: [Ar] 3d54s2\n\
            Descubrimiento: 1774");
}

function Tecnecio(){
    alert(" Tecnecio \n\n\
            Masa atomica: 98  \n\
            Numero atomico: 43 \n\
            Configuracion electronica: [Kr] 4d55s2\n\
            Descubrimiento: 1937");
}

function Renio(){
    alert(" Tecnecio \n\n\
            Masa atomica: 186.2  \n\
            Numero atomico: 75 \n\
            Configuracion electronica: [Xe] 4f145d56s2\n\
            Descubrimiento: 1925");
}

function Bohrio(){
    alert(" Bohrio \n\n\
            Masa atomica: 264  \n\
            Numero atomico: 107 \n\
            Configuracion electronica: 5f14 6d5 7s2\n\
            Descubrimiento: 1981");
}

function Neodimio(){
    alert(" Neodimio \n\n\
            Masa atomica: 144.24  \n\
            Numero atomico: 60 \n\
            Configuracion electronica: [Xe] 4f46s2\n\
            Descubrimiento: 1885");
}

function Uranio(){
    alert(" Uranio \n\n\
            Masa atomica: 238.02  \n\
            Numero atomico: 92 \n\
            Configuracion electronica: [Rn] 5f36d17s2\n\
            Descubrimiento: 1789");
}

function Hierro(){
    alert(" Hierro \n\n\
            Masa atomica: 55.84  \n\
            Numero atomico: 26 \n\
            Configuracion electronica: [Ar] 3d64s2\n\
            Descubrimiento: 1350");
}

function Rutenio(){
    alert(" Rutenio \n\n\
            Masa atomica: 101.07  \n\
            Numero atomico: 44  \n\
            Configuracion electronica: [Kr] 4d75s1\n\
            Descubrimiento: 1844");
}

function Osmio(){
    alert(" Osmio \n\n\
            Masa atomica: 190.23  \n\
            Numero atomico: 76   \n\
            Configuracion electronica: [Xe] 4f145d66s2\n\
            Descubrimiento: 1803");
}

function Hassio(){
    alert(" Hassio \n\n\
            Masa atomica: 277  \n\
            Numero atomico: 108   \n\
            Configuracion electronica: 5f14 6d6 7s2\n\
            Descubrimiento: 1984");
}

function Prometio(){
    alert(" Prometio \n\n\
            Masa atomica: 145  \n\
            Numero atomico: 61   \n\
            Configuracion electronica: [Xe] 4f56s2\n\
            Descubrimiento: 1945");
}

function Neptunio(){
    alert(" Neptunio \n\n\
            Masa atomica: 237   \n\
            Numero atomico: 93   \n\
            Configuracion electronica: [Rn] 5f46d17s2\n\
            Descubrimiento: 1940");
}

function Cobalto(){
    alert(" Cobalto \n\n\
            Masa atomica: 58.93   \n\
            Numero atomico: 27   \n\
            Configuracion electronica: [Ar] 3d74s2\n\
            Descubrimiento: 1735");
}

function Rodio(){
    alert(" Rodio \n\n\
            Masa atomica: 122.9   \n\
            Numero atomico: 45   \n\
            Configuracion electronica: [Kr] 4d85s1\n\
            Descubrimiento: 1803");
}

function Iridio(){
    alert(" Iridio \n\n\
            Masa atomica: 192.21   \n\
            Numero atomico: 77    \n\
            Configuracion electronica: [Xe] 4f145d76s2\n\
            Descubrimiento: 1803");
}

function Meitnerio(){
    alert(" Meitnerio \n\
            Masa atomica: 268    \n\
            Numero atomico: 109    \n\
            Configuracion electronica: 7s2 5f14 6d7\n\
            Descubrimiento: 1982");
}

function Samario(){
    alert(" Samario \n\n\
            Masa atomica: 150.36    \n\
            Numero atomico: 62    \n\
            Configuracion electronica: [Xe] 4f66s2\n\
            Descubrimiento: 1879");
}

function Plutonio(){
    alert(" Plutonio \n\n\
            Masa atomica: 244     \n\
            Numero atomico: 94    \n\
            Configuracion electronica: [Rn] 5f67s2\n\
            Descubrimiento: 1940");
}

function Niquel(){
    alert(" Niquel \n\n\
            Masa atomica: 58.69     \n\
            Numero atomico: 28     \n\
            Configuracion electronica: [Ar] 3d84s2\n\
            Descubrimiento: 1751");
}

function Paladio(){
    alert(" Paladio \n\n\
            Masa atomica: 106.42     \n\
            Numero atomico: 46      \n\
            Configuracion electronica: [Kr] 4d10\n\
            Descubrimiento: 1802");
}

function Platino(){
    alert(" Platino \n\n\
            Masa atomica: 195.08     \n\
            Numero atomico: 78      \n\
            Configuracion electronica: [Xe] 4f145d96s1\n\
            Descubrimiento: 1735");
}

function Dermstadio(){
    alert(" Darmstadio \n\n\
            Masa atomica: 281      \n\
            Numero atomico: 110      \n\
            Configuracion electronica: 7s25f146d8\n\
            Descubrimiento: 1994");
}

function Europio(){
    alert(" Europio \n\n\
            Masa atomica: 151.96      \n\
            Numero atomico: 63      \n\
            Configuracion electronica: [Xe] 4f76s2\n\
            Descubrimiento: 1901");
}

function Americio(){
    alert(" Americio \n\n\
            Masa atomica: 281      \n\
            Numero atomico: 95      \n\
            Configuracion electronica: [Rn] 5f77s2\n\
            Descubrimiento: 1944");
}

function Cobre(){
    alert(" Cobre \n\n\
            Masa atomica: 63.54      \n\
            Numero atomico: 29      \n\
            Configuracion electronica: [Ar] 3d104s1\n\
            Descubrimiento: 9000 a.C.");
}

function Plata(){
    alert(" Plata \n\n\
            Masa atomica: 107.86      \n\
            Numero atomico: 47      \n\
            Configuracion electronica: [Kr] 4d105s1\n\
            Descubrimiento: 1516");   
}

function Oro(){
    alert(" Oro \n\n\
            Masa atomica: 196.96 \n\
            Numero atomico: 79 \n\
            Configuracion electronica: [Xe] 4f14 5d10 6s1 \n\
            Descubrimiento: 1849");
}

function Roentgenio(){
    alert(" Roentgenio \n\n\
            Masa atomica: 272      \n\
            Numero atomico: 111      \n\
            Configuracion electronica: 5f14 6d10 7s1\n\
            Descubrimiento: 1994");
}

function Gadolinio(){
    alert(" Gadolinio \n\n\
            Masa atomica: 157.25      \n\
            Numero atomico: 64      \n\
            Configuracion electronica: [Xe] 4f75d16s2\n\
            Descubrimiento: 1880");
}

function Curio(){
    alert(" Curio \n\n\
            Masa atomica: 247      \n\
            Numero atomico: 96      \n\
            Configuracion electronica: [Rn] 5f76d17s2\n\
            Descubrimiento: 1944");
}

function Cinc(){
    alert(" Cinc \n\n\
            Masa atomica: 65.38      \n\
            Numero atomico: 30      \n\
            Configuracion electronica: [Ar] 3d104s2\n\
            Descubrimiento: 1746");
}

function Cadmio(){
    alert(" Cadmio \n\n\
            Masa atomica: 112.4      \n\
            Numero atomico: 48      \n\
            Configuracion electronica: [Kr] 4d105s2\n\
            Descubrimiento: 1817");
}

function Mercurio(){
    alert(" Mercurio \n\n\
            Masa atomica: 200.60      \n\
            Numero atomico: 80      \n\
            Configuracion electronica: [Xe] 4f145d106s2\n\
            Descubrimiento: 2000 a.C.");
}

function Copernico(){
    alert(" Copernico \n\n\
            Masa atomica: 285      \n\
            Numero atomico: 112      \n\
            Configuracion electronica: 5f14 6d10 7s2\n\
            Descubrimiento: 1996");
}

function Terbio(){
    alert(" Terbio \n\n\
            Masa atomica: 158.9      \n\
            Numero atomico: 65      \n\
            Configuracion electronica: [Xe] 4f96s2\n\
            Descubrimiento: 1843");
}

function Berkelio(){
    alert(" Berkelio \n\n\
            Masa atomica: 247       \n\
            Numero atomico: 97      \n\
            Configuracion electronica: [Rn] 5f97s2\n\
            Descubrimiento: 1949");
}

function Boro(){
    alert(" Boro \n\n\
            Masa atomica: 10.81      \n\
            Numero atomico: 5      \n\
            Configuracion electronica: [He] 2s22p1\n\
            Descubrimiento: 1808");
}

function Aluminio(){
    alert(" Aluminio \n\n\
            Masa atomica: 28.98      \n\
            Numero atomico: 13      \n\
            Configuracion electronica: [Ne] 3s2 3p1\n\
            Descubrimiento: 1825");
}

function Galio(){
    alert(" Galio \n\n\
            Masa atomica: 69.72      \n\
            Numero atomico: 31      \n\
            Configuracion electronica: [Ar] 3d104s24p1\n\
            Descubrimiento: 1875");
}

function Indio(){
    alert(" Indio \n\n\
            Masa atomica: 114.81      \n\
            Numero atomico: 49       \n\
            Configuracion electronica: [Kr] 4d105s25p1\n\
            Descubrimiento: 1863");
}

function Talio(){
    alert(" Talio \n\n\
            Masa atomica: 204.38      \n\
            Numero atomico: 81      \n\
            Configuracion electronica: [Xe] 4f145d106s26p1\n\
            Descubrimiento: 1861");
}

function Nihonium(){
    alert(" Dermstadio \n\n\
            Masa atomica: 286      \n\
            Numero atomico: 113      \n\
            Configuracion electronica: 5f14 6d10 7s2 7p1\n\
            Descubrimiento: 2003");
}

function Disprosio(){
    alert(" Disprosio \n\n\
            Masa atomica: 162.5      \n\
            Numero atomico: 66      \n\
            Configuracion electronica: [Xe] 4f106s2\n\
            Descubrimiento: 1886");
}

function Californio(){
    alert(" Californio \n\n\
            Masa atomica: 251      \n\
            Numero atomico: 98      \n\
            Configuracion electronica: [Rn] 5f107s2\n\
            Descubrimiento: 1950");
}

function Carbono(){
    alert(" Carbono \n\n\
            Masa atomica: 12.01      \n\
            Numero atomico: 6      \n\
            Configuracion electronica: [He] 2s22p2\n\
            Descubrimiento: 3750 a.C.");
}

function Silicio(){
    alert(" Silicio \n\n\
            Masa atomica: 28.08      \n\
            Numero atomico: 14      \n\
            Configuracion electronica: [Ne] 3s23p2\n\
            Descubrimiento: 1994");
}

function Germanio(){
    alert(" Germanio \n\n\
            Masa atomica: 72.64      \n\
            Numero atomico: 32      \n\
            Configuracion electronica: [Ar] 3d104s24p2\n\
            Descubrimiento: 1886");
}

function Estaño(){
    alert(" Estaño \n\n\
            Masa atomica: 118.71      \n\
            Numero atomico: 50      \n\
            Configuracion electronica: [Kr] 4d105s25p2\n\
            Descubrimiento: 1854");
}

function Plomo(){
    alert(" Plomo \n\n\
            Masa atomica: 2017.2      \n\
            Numero atomico: 82      \n\
            Configuracion electronica: [Xe] 4f145d106s26p2\n\
            Descubrimiento: 1754 ");
}

function Flerovio(){
    alert(" Flerovio \n\n\
            Masa atomica: 289      \n\
            Numero atomico: 114      \n\
            Configuracion electronica: 5f14 6d10 7s2 7p2\n\
            Descubrimiento: 1998");
}

function Holmio(){
    alert(" Holmio \n\n\
            Masa atomica: 164.93      \n\
            Numero atomico: 67      \n\
            Configuracion electronica: [Xe] 4f116s2\n\
            Descubrimiento: 1878");
}

function Eistenio(){
    alert(" Eistenio \n\n\
            Masa atomica: 252       \n\
            Numero atomico: 99      \n\
            Configuracion electronica: [Rn] 5f117s2\n\
            Descubrimiento: 1952");
}

function Nitrogeno(){
    alert(" Nitrogeno \n\n\
            Masa atomica: 14      \n\
            Numero atomico: 7      \n\
            Configuracion electronica: [He] 2s22p3\n\
            Descubrimiento: 1772");
}

function Fosforo(){
    alert(" Fosforo \n\n\
            Masa atomica: 30.97      \n\
            Numero atomico: 15      \n\
            Configuracion electronica: 1s22s22p63s23p3\n\
            Descubrimiento: 1994");
}

function Arsenico(){
    alert(" Arsenico \n\n\
            Masa atomica: 74.92      \n\
            Numero atomico: 33      \n\
            Configuracion electronica: [Ar] 3d104s24p3\n\
            Descubrimiento: 1250");
}

function Antimonio(){
    alert(" Antimonio \n\n\
            Masa atomica: 121.76      \n\
            Numero atomico: 51     \n\
            Configuracion electronica: [Kr] 4d105s25p3\n\
            Descubrimiento: 3000 a. C.");
}

function Bismuto(){
    alert(" Bismuto \n\n\
            Masa atomica: 208.98      \n\
            Numero atomico: 83       \n\
            Configuracion electronica: [Xe] 4f145d106s26p3\n\
            Descubrimiento: 1753");
}

function Moscovium(){
    alert(" Dermstadio \n\n\
            Masa atomica: 288      \n\
            Numero atomico: 115      \n\
            Configuracion electronica: 5f14 6d10 7s2 7p3\n\
            Descubrimiento: 2003");
}

function Erbio(){
    alert(" Erbio \n\n\
            Masa atomica: 167.25      \n\
            Numero atomico: 68      \n\
            Configuracion electronica: [Xe] 4f126s2\n\
            Descubrimiento: 1843");
}

function Fermio(){
    alert(" Fermio \n\n\
            Masa atomica: 257       \n\
            Numero atomico: 254      \n\
            Configuracion electronica: [Rn] 5f127s2\n\
            Descubrimiento: 1953");
}

function Oxigeno(){
    alert(" Oxigeno \n\n\
            Masa atomica: 15.99      \n\
            Numero atomico: 8      \n\
            Configuracion electronica: [He] 2s22p4\n\
            Descubrimiento: 1772");
}

function Azufre(){
    alert(" Azufre \n\n\
            Masa atomica: 32.06      \n\
            Numero atomico: 16      \n\
            Configuracion electronica: [Ne] 3s²3p⁴\n\
            Descubrimiento: 1777");
}

function Selenio(){
    alert(" Selenio \n\n\
            Masa atomica: 78.96      \n\
            Numero atomico: 34      \n\
            Configuracion electronica: [Ar] 3d104s24p4\n\
            Descubrimiento: 1817");
}

function Telurio(){
    alert(" Dermstadio \n\n\
            Masa atomica: 281      \n\
            Numero atomico: 52      \n\
            Configuracion electronica: [Kr] 4d105s25p4\n\
            Descubrimiento: 1782");
}

function Polonio(){
    alert(" Polonio \n\n\
            Masa atomica: 209      \n\
            Numero atomico: 84      \n\
            Configuracion electronica: [Xe] 6s24f145d106p4\n\
            Descubrimiento: 1898");
}

function Livermonio(){
    alert(" Livermorio \n\n\
            Masa atomica: 292      \n\
            Numero atomico: 116      \n\
            Configuracion electronica: 5f14 6d10 7s2 7p4\n\
            Descubrimiento: 2000");
}

function Tulio(){
    alert(" Tulio \n\n\
            Masa atomica: 168.93      \n\
            Numero atomico: 69      \n\
            Configuracion electronica: [Xe] 4f136s2\n\
            Descubrimiento: 1879");
}

function Mendelevio(){
    alert(" Mendelevio \n\n\
            Masa atomica: 258       \n\
            Numero atomico: 101      \n\
            Configuracion electronica: [Rn] 5f137s2\n\
            Descubrimiento: 1955");
}

function Fluor(){
    alert(" Fluor \n\n\
            Masa atomica: 18.99      \n\
            Numero atomico: 9      \n\
            Configuracion electronica: [He] 2s22p5\n\
            Descubrimiento: 1886");
    
}

function Cloro(){
    alert(" Cloro \n\n\
            Masa atomica: 35.43      \n\
            Numero atomico: 17      \n\
            Configuracion electronica: [Ne] 3s23p5\n\
            Descubrimiento: 1774");
}

function Bromo(){
    alert(" Bromo \n\
            Masa atomica: 79.9      \n\
            Numero atomico: 35       \n\
            Configuracion electronica: [Ar] 3d104s24p5\n\
            Descubrimiento: 1826");
}

function Yodo(){
    alert(" Yodo \n\n\
            Masa atomica: 126.9      \n\
            Numero atomico: 53       \n\
            Configuracion electronica: [Kr] 4d105s25p5\n\
            Descubrimiento: 1811");
}

function Astato(){
    alert(" Astato \n\
            Masa atomica: 281      \n\
            Numero atomico: 85      \n\
            Configuracion electronica: [Xe] 4f145d106s26p5\n\
            Descubrimiento: 1940");
}

function Tennessine(){
    alert(" Tennessine \n\n\
            Masa atomica: 210     \n\
            Numero atomico: 110      \n\
            Configuracion electronica: 7s25f146d8\n\
            Descubrimiento: 1994");
}

function Iterbio(){
    alert(" Iterbio \n\n\
            Masa atomica: 70      \n\
            Numero atomico: 173.04      \n\
            Configuracion electronica: [Xe] 4f146s2\n\
            Descubrimiento: 1878");
}

function Nobelio(){
    alert(" Nobelio \n\n\
            Masa atomica: 259       \n\
            Numero atomico: 110      \n\
            Configuracion electronica: [Rn] 5f147s2\n\
            Descubrimiento: 1966");
}

function Helio(){
    alert(" Helio \n\n\
            Masa atomica: 281      \n\
            Numero atomico: 102      \n\
            Configuracion electronica: 1s2\n\
            Descubrimiento: 1868");
}

function Neon(){
    alert(" Neon \n\n\
            Masa atomica: 20.17      \n\
            Numero atomico: 10      \n\
            Configuracion electronica: [He] 2s22p6\n\
            Descubrimiento: 1898");
}

function Argon(){
    alert(" Argon \n\n\
            Masa atomica: 39.94      \n\
            Numero atomico: 18      \n\
            Configuracion electronica: [Ne] 3s23p6\n\
            Descubrimiento: 1894");
}

function Kripton(){
    alert(" Kripton \n\n\
            Masa atomica: 83.79      \n\
            Numero atomico: 36      \n\
            Configuracion electronica: [Ar] 3d104s24p6\n\
            Descubrimiento: 1898");
}

function Xenon(){
    alert(" Xenon \n\n\
            Masa atomica: 281      \n\
            Numero atomico: 110      \n\
            Configuracion electronica: 7s25f146d8\n\
            Descubrimiento: 1994");
}

function Radon(){
    alert(" Xenon \n\n\
            Masa atomica: 131.29      \n\
            Numero atomico: 54      \n\
            Configuracion electronica: [Kr] 4d105s25p6\n\
            Descubrimiento: 1898");
}

function Oganesson(){
    alert(" Oganesson \n\n\
            Masa atomica: 294       \n\
            Numero atomico: 118      \n\
            Configuracion electronica:  5f14 6d10 7s2 7p6\n\
            Descubrimiento: 2006");
}

function Lutecio(){
    alert(" Lutecio \n\n\
            Masa atomica: 174.96      \n\
            Numero atomico: 71      \n\
            Configuracion electronica: [Xe] 4f145d16s2\n\
            Descubrimiento: 1907");
}

function Lawrencio(){
    alert(" Lawrencio \n\n\
            Masa atomica: 262       \n\
            Numero atomico: 103      \n\
            Configuracion electronica: [Rn] 5f147s27p1\n\
            Descubrimiento: 1961");
}

