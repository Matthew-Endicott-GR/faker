"use strict";(()=>{var e=["#####","####","###"];var r=["{{address.city_prefix}} {{name.first_name}}{{address.city_suffix}}","{{address.city_prefix}} {{name.first_name}}","{{name.first_name}}{{address.city_suffix}}","{{name.last_name}}{{address.city_suffix}}"];var t=["\u0627\u0633\u0644\u0627\u0645 \u0627\u0653\u0628\u0627\u062F","\u067E\u0634\u0627\u0648\u0631","\u0644\u0627\u06C1\u0648\u0631","\u06A9\u0631\u0627\u0686\u06CC","\u0645\u0644\u062A\u0627\u0646","\u0646\u0648\u0634\u06C1\u0631\u06C1","\u0645\u0631\u062F\u0627\u0646","\u0686\u0627\u0631\u0633\u062F\u06C1","\u06AF\u0648\u062C\u0631\u0646\u0648\u0627\u0644\u06C1","\u06AF\u062C\u0631\u0627\u062A","\u0645\u0646\u06AF\u0648\u0631\u06C1","\u0645\u0644\u0627\u06A9\u0646\u0688","\u062F\u0631\u06AF\u06CC\u0657","\u062D\u06CC\u062F\u0631\u0627\u0653\u0628\u0627\u062F","\u0627\u06CC\u0628\u0679 \u0627\u0653\u0628\u0627\u062F","\u0646\u0627\u0631\u0627\u0646","\u0641\u06CC\u0635\u0644 \u0627\u0653\u0628\u0627\u062F","\u0631\u0627\u0648\u0644\u067E\u0646\u0688\u06CC","\u06A9\u0648\u0626\u0679\u06C1","\u0628\u06C1\u0627\u0648\u0644\u067E\u0648\u0631","\u0633\u06CC\u0627\u0644\u06A9\u0648\u0679","\u0644\u0627\u0691\u06A9\u0627\u0646\u06C1","\u0631\u062D\u06CC\u0645 \u06CC\u0627\u0631 \u062E\u0627\u0646","\u0642\u0635\u064F\u0648\u0631","\u0627\u0648\u06A9\u0627\u0691\u0627\u200E","\u0646\u0648\u0627\u0628 \u0634\u0627\u06C1","\u0686\u0646\u06CC\u0648\u0679","\u062D\u0627\u0641\u0638 \u0627\u0653\u0628\u0627\u062F","\u06A9\u0648\u06BE\u0627\u0679","\u062C\u06C1\u0644\u0645","\u0648\u0627\u0631\u0633\u06A9","\u062E\u0627\u0646\u067E\u0648\u0631","\u062D\u0628","\u062F\u0633\u06A9\u06C1","\u062E\u0632\u062F\u0627\u0631","\u0645\u0631\u06CC","\u06AF\u0648\u062C\u0631\u06C1","\u062F\u0627\u062F\u0648","\u0686\u0634\u062A\u06CC\u0627\u06BA","\u0679\u06CC\u06A9\u0633\u0644\u0627","\u06A9\u0628\u0644","\u06AF\u0648\u0679\u06A9\u06CC","\u0646\u0627\u0631\u0648 \u0648\u0627\u0644","\u06AF\u0648\u0627\u062F\u0631"];var s=["\u0645\u0634\u0631\u0642","\u0645\u063A\u0631\u0628","\u0634\u0645\u0627\u0644","\u062C\u0646\u0648\u0628","\u0646\u06CC\u0627","\u062C\u06BE\u06CC\u0644","\u0628\u0646\u062F\u0631\u06AF\u0627\u06C1"];var d=["\u0679\u0627\u0648\u0652\u0646"];var o=["\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646","\u0627\u0644\u0628\u0627\u0646\u06CC\u0627","\u0627\u0644\u062C\u0632\u0627\u06CC\u0631","\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0627","\u0627\u0646\u062F\u0648\u0631\u06C1","\u0627\u0646\u06AF\u0648\u0644\u0627","\u0627\u0646\u06AF\u0648\u06CC\u0644\u06CC\u0627","\u0627\u0646\u062A\u0627\u0631\u062A\u06CC\u06A9\u0627","\u0627\u0646\u062A\u06CC\u06AF\u0627 \u0627\u0648\u0631 \u0628\u0627\u0631\u0628\u0626\u062F\u0627","\u0627\u0631\u062C\u0646\u0679\u0627\u06CC\u0646\u0627","\u0627\u0631\u0645\u06CC\u0646\u06CC\u0627","\u0627\u0631\u0648\u0628\u0627","\u0627\u0653\u0633\u0679\u0631\u06CC\u0644\u06CC\u0644\u0627","\u0627\u0653\u0633\u0679\u0631\u06CC\u0627","\u0627\u0653\u0632\u0631\u0628\u0627\u06CC\u062C\u0627\u0646","\u0628\u06C1\u0627\u0645\u0633","\u0628\u06C1\u0631\u06CC\u0646","\u0628\u0646\u06AF\u0644\u06C1 \u062F\u06CC\u0634","\u0628\u0627\u0631\u0628\u0627\u062F\u0648\u0633","\u0628\u06CC\u0644\u0627\u0631\u0648\u0633","\u0628\u06CC\u0644\u062C\u06CC\u0645","\u0628\u06CC\u0644\u06CC\u0632","\u0628\u06CC\u0646\u0646","\u0628\u0631\u0645\u0648\u062F\u06C1","\u0628\u06BE\u0648\u0679\u0627\u0646","\u0628\u0648\u0644\u0648\u06CC\u0627","\u0628\u0648\u0633\u0646\u06CC\u0627 \u0648 \u06C1\u0631\u0632\u06AF\u0648\u0648\u06CC\u0646\u06CC\u0627","\u0628\u0648\u0633\u0679\u0648\u0627\u0646\u0627","\u0628\u0631\u0627\u0632\u06CC\u0644","\u0628\u0631\u0648\u0646\u0648\u0626 \u062F\u0627\u0631\u0627\u0633\u0644\u0627\u0645","\u0628\u0644\u063A\u0627\u0631\u06CC\u06C1","\u0628\u0631\u0648\u0646\u0688\u06CC","\u06A9\u0645\u0628\u0648\u0688\u06CC\u0627","\u06A9\u0645\u0631\u0648\u06CC\u0646","\u06A9\u06CC\u0646\u06CC\u0688\u0627","\u0633\u06CC\u0646\u0679\u0631\u0644 \u0627\u0641\u0631\u06CC\u0642\u06CC \u0631\u06CC\u0627\u0633\u062A","\u0686\u0627\u0688","\u0686\u0644\u06D2","\u0686\u0627\u0626\u0646\u0627","\u06A9\u0648\u0644\u0645\u0628\u06CC\u0627","\u06A9\u0648\u0645\u0648\u0631\u0633","\u06A9\u0627\u0646\u06AF\u0648","\u06A9\u0648\u0633\u0679\u0627 \u0631\u06CC\u06A9\u0627","\u06A9\u0631\u0648\u0627\u06CC\u0634\u06CC\u0627","\u06A9\u0648\u0628\u0627","\u0686\u06A9 \u0631\u06CC\u0627\u0633\u062A","\u0688\u06CC\u0646\u0645\u0627\u0631\u06A9","\u062C\u0628\u0648\u062A\u06CC","\u0688\u0648\u0645\u06CC\u0646\u06A9 \u0631\u06CC\u0627\u0633\u062A","\u0627\u06A9\u0648\u0627\u0688\u0648\u0631","\u0645\u0635\u0631","\u0627\u0644 \u0633\u0644\u0648\u0627\u062F\u0648\u0631","\u0627\u06CC\u0631\u0679\u0631\u06CC\u0627","\u0627\u0633\u062A\u0648\u0646\u06CC\u0627","\u0627\u062A\u06BE\u0648\u067E\u06CC\u0627","\u0641\u06CC \u062C\u06CC","\u0641\u0646 \u0644\u06CC\u0646\u0688","\u0641\u0631\u0627\u0646\u0633","\u06AF\u0627\u0628\u0648\u0646","\u06AF\u0627\u0645\u0628\u06CC\u06C1","\u062C\u06CC\u0648\u0631\u062C\u06CC\u06C1","\u062C\u0631\u0645\u0646\u06CC","\u06AF\u0627\u0646\u0627","\u062C\u0628\u0631\u0627\u0644\u0679\u0631","\u06CC\u0648\u0646\u0627\u0646","\u06AF\u0627\u0645","\u0648\u0627\u062A\u06CC\u06A9\u0646","\u06C1\u0648\u0646\u0688\u0648\u0631\u0633","\u06C1\u0627\u0646\u06AF \u06A9\u0627\u0646\u06AF","\u06C1\u0646\u06AF\u0631\u06CC","\u0628\u06BE\u0627\u0631\u062A","\u0627\u0646\u0688\u0648\u0646\u06CC\u0634\u06CC\u0627","\u0627\u06CC\u0631\u0627\u0646","\u0639\u0631\u0627\u0642","\u0627\u0653\u0626\u0631 \u0644\u06CC\u0646\u0688","\u0627\u0679\u0644\u06CC","\u062C\u0645\u0627\u0626\u06A9\u06C1","\u062C\u0627\u067E\u0627\u0646","\u0627\u0652\u0631\u062F\u0646","\u06A9\u0627\u0632\u062E\u0633\u062A\u0627\u0646","\u06A9\u06CC\u0646\u06CC\u0627","\u06A9\u0631\u06CC\u0628\u0627\u062A\u06CC","\u0634\u0645\u0627\u0644\u06CC \u0631\u06CC\u0627\u0633\u062A \u06A9\u0648\u0631\u06CC\u0627","\u062C\u0646\u0648\u0628\u06CC \u0631\u06CC\u0627\u0633\u062A \u06A9\u0648\u0631\u06CC\u0627","\u06A9\u0648\u06CC\u062A","\u0644\u0628\u0646\u0627\u0646","\u0645\u0633\u06CC\u0688\u0648\u0646","\u0645\u062F\u06AF\u0627\u0633\u06A9\u0631","\u0645\u0644\u0627\u0648\u06CC","\u0645\u0644\u0627\u0626\u0634\u06CC\u0627","\u0645\u0627\u0644\u062F\u06CC\u067E","\u0645\u0627\u0644\u06CC","\u0645\u0627\u0644\u0679\u0627","\u0645\u06CC\u06A9\u0633\u06CC\u06A9\u0648","\u0645\u0646\u06AF\u0648\u0644\u06CC\u06C1","\u0645\u0631\u0627\u06A9\u0698","\u0645\u06CC\u0627\u0646\u0645\u0627\u0631","\u0646\u06CC\u067E\u0627\u0644","\u0646\u06CC\u062F\u0631\u0644\u06CC\u0646\u0688","\u0646\u06CC\u0648\u0632\u06CC\u0644\u06CC\u0646\u0688","\u0646\u06CC\u06A9\u0627\u0631\u0627\u06AF\u0648\u0627","\u0646\u0627\u0626\u062C\u0631","\u0646\u06CC\u06CC\u062C\u06CC\u0631\u06CC\u0627","\u0646\u0627\u0631\u0648\u06D2","\u0627\u0648\u0645\u0627\u0646","\u0627\u0633\u0644\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646","\u067E\u0644\u0627\u0648\u0611","\u0641\u0644\u0633\u0637\u06CC\u0646","\u067E\u0627\u0646\u0627\u0645\u0627","\u067E\u0631\u0648","\u0641\u0644\u067E\u0627\u0626\u0646","\u067E\u0648\u0644\u06CC\u0646\u0688","\u067E\u0631\u062A\u06AF\u0627\u0644","\u067E\u0648\u0631\u062A\u0648 \u0631\u06CC\u06A9\u0648","\u0642\u0637\u0631","\u0631\u0648\u0645\u0627\u0646\u06CC\u06C1","\u0631\u0648\u0633","\u0631\u0648\u0627\u0646\u0688\u0627","\u0633\u0645\u0648\u06C1","\u0633\u0627\u0646 \u0645\u0631\u06CC\u0646\u0648","\u0633\u0639\u0648\u062F\u06CC\u06C1 \u0639\u0631\u0628\u06CC\u06C1","\u0633\u0646\u06CC\u06AF\u0627\u0644","\u0633\u0631\u0628\u06CC\u0627","\u0633\u06D2 \u0634\u06CC\u0644","\u0633\u0646\u06AF\u0627\u067E\u0648\u0631","\u0633\u0648\u0645\u0627\u0644\u06CC\u06C1","\u062C\u0646\u0648\u0628\u06CC \u0627\u0641\u0631\u0642\u06C1","\u06C1\u0633\u067E\u0627\u0646\u06CC\u06C1","\u0633\u0631\u06CC \u0644\u0646\u06A9\u0627","\u0633\u0648\u0688\u0627\u0646","\u0633\u0631\u06CC \u0646\u0627\u0645\u067E","\u0633\u0648\u0627\u0632\u06CC \u0644\u06CC\u0646\u0688","\u0633\u0648\u06CC\u0688\u0646","\u0633\u0648\u0679\u0632\u0631\u0644\u06CC\u0646\u0688","\u0634\u0627\u0645","\u062A\u0627\u0626\u0648\u0627\u0646","\u062A\u0627\u062C\u06A9\u0633\u062A\u0627\u0646","\u062A\u0646\u0632\u0627\u0646\u06CC\u06C1","\u062A\u06BE\u0627\u0626 \u0644\u06CC\u0646\u0688","\u0679\u0648\u06AF\u0648","\u0679\u0648\u0646\u06AF\u0627","\u0679\u0648\u0646\u06CC\u0633\u06CC\u0627","\u062A\u0631\u06A9\u06CC","\u062A\u0631\u06A9\u0645\u0627\u0646\u0633\u062A\u0627\u0646","\u06CC\u0648\u06AF\u0627\u0646\u0688\u0627","\u06CC\u0648\u06A9\u0631\u06CC\u0646","\u0645\u062A\u062D\u062F\u06C1 \u0639\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A","\u0645\u062A\u062D\u062F\u06C1 \u0633\u0644\u0637\u0646\u062A","\u0645\u062A\u062D\u062F\u06C1 \u0631\u06CC\u0627\u0633\u062A \u0627\u0645\u0631\u06CC\u06A9\u0627","\u06CC\u0648\u0631\u0627\u06AF\u0648\u0627\u0626\u06D2","\u0627\u0652\u0632\u0628\u06A9\u0633\u062A\u0627\u0646","\u0648\u0646\u06CC\u0632\u0648\u06CC\u0644\u0627","\u0648\u062A\u0646\u0627\u0645","\u06CC\u0645\u0646","\u0632\u0645\u0628\u06CC\u0627","\u0632\u0645\u0628\u0627\u0628\u0648\u06D2"];var f=["\u0627\u0633\u0644\u0627\u0645\u06CC \u062C\u0645\u06C1\u0648\u0631\u06CC\u06C1 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646"];var a=["\u0634\u0645\u0627\u0644","\u0645\u0634\u0631\u0642","\u062C\u0646\u0648\u0628","\u0645\u063A\u0631\u0628","\u0634\u0645\u0627\u0644 \u0645\u0634\u0631\u0642","\u0633\u0645\u0627\u0644 \u0645\u063A\u0631\u0628","\u062C\u0646\u0648\u0628 \u0645\u0634\u0631\u0642","\u062C\u0646\u0648\u0628 \u0645\u063A\u0631\u0628"];var i=["#####"];var m=["\u06AF\u06BE\u0631. ###","\u06AF\u0644\u06CC ###"];var p=["\u062E\u06CC\u0628\u0631 \u067E\u062E\u062A\u0648\u0646\u062E\u0648\u0627\u06C1","\u0627\u0633\u0644\u0627\u0645 \u0627\u0653\u0628\u0627\u062F","\u067E\u0646\u062C\u0627\u0628","\u0633\u0646\u062F\u06BE","\u0627\u0653\u0632\u0627\u062F \u06A9\u0634\u0645\u06CC\u0631","\u0628\u0644\u0648\u0686\u0633\u062A\u0627\u0646","\u06AF\u0644\u06AF\u062A \u0628\u0644\u062A\u0633\u062A\u0627\u0646"];var u=["KP","ICT","J&K","GB","PB","SD","BA"];var n=["{{name.first_name}} {{address.street_suffix}}","{{name.last_name}} {{address.street_suffix}}"];var x={normal:"{{address.buildingNumber}} {{address.street}}",full:"{{address.buildingNumber}} {{address.street}} {{address.secondaryAddress}}"};var l=["\u06AF\u0627\u0648\u0652\u06BA","\u06AF\u0644\u06CC","\u0627\u0653\u0628\u0627\u062F","\u06A9\u0627\u0644\u0648\u0646\u06CC","\u06AF\u06BE\u0691\u06CC"];var _={building_number:e,city:r,city_name:t,city_prefix:s,city_suffix:d,country:o,default_country:f,direction:a,postcode:i,secondary_address:m,state:p,state_abbr:u,street:n,street_address:x,street_suffix:l},R=_;})();