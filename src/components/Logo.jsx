import * as React from "react"

const Logo = (props) => {
     console.log(props.width);
  return (
    <svg width={props.width} height={99} viewBox="0 0 278 99" {...props}>
      <title>{"Group 80"}</title>
      <defs>
        <path id="prefix__a" d="M.12.085h14.681v14.782H.121z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M58 26.106c-2.875-.427-4.487-.283-6.861 2.618-.188-.166-.382-.324-.56-.499-2.013-1.966-4.414-3.243-7.068-4.081-1.487-.47-2.97-.956-4.517-1.195-2.68-.413-5.368-.584-8.061-.113-1.856.325-3.584.975-5.053 2.199-2.27 1.89-3.429 4.346-3.692 7.296-.299 3.335 1.04 5.972 3.322 8.21.504.494 1.156.854 1.783 1.196 2.043 1.115 4.196 1.987 6.354 2.842 3.06 1.212 6.134 2.384 9.183 3.624 2.469 1.004 4.84 2.215 7.026 3.761.931.659 1.829 1.37 2.708 2.1 2.08 1.729 3.484 3.925 4.229 6.531.791 2.772 1.06 5.594.682 8.47-.33 2.505-1.217 4.794-2.698 6.808-3.53 4.802-8.176 7.771-14.102 8.612a52.407 52.407 0 01-10.1.443c-5.666-.295-11.058-1.713-16.186-4.185-.955-.46-1.293-1.125-1.297-2.107-.011-2.642-.037-5.284-.059-7.925-.01-1.236-.04-2.472-.031-3.707.005-.746.172-.922.884-.95a30.2 30.2 0 012.278-.005c.77.027.968.228.986 1.004.029 1.197.168 2.377.428 3.545.397 1.781 1.21 3.352 2.342 4.761 2.07 2.576 4.716 4.232 7.923 4.922 3.686.794 7.375.777 11.034-.18 2.03-.53 3.86-1.472 5.385-2.958 1.273-1.24 2.187-2.701 2.634-4.436.503-1.955.712-3.935.427-5.95a7.065 7.065 0 00-1.914-3.95c-1.322-1.396-2.817-2.555-4.543-3.416-2.123-1.06-4.334-1.878-6.598-2.563-3.643-1.102-7.199-2.427-10.499-4.362a44.86 44.86 0 01-3.493-2.302c-2.908-2.092-4.719-4.946-5.534-8.438-.624-2.677-.826-5.385-.366-8.116.455-2.706 1.573-5.115 3.275-7.241 3.191-3.99 7.273-6.537 12.24-7.627 3.409-.747 6.85-.89 10.32-.606 2.446.2 4.852.587 7.193 1.35 2.021.658 3.91 1.58 5.638 2.832.48.347 1.003.63 1.48.981 1.02.752 2.027 1.525 3.03 2.3.152.116.26.29.448.507"
          fill="#FFF"
        />
        <path
          d="M.005 97.967v-1.321C.005 71.687.01 46.729 0 21.77c-.002-4.128 1.07-7.931 3.398-11.342 3.324-4.867 7.943-7.83 13.727-9C18.658 1.117 20.21 1 21.773 1h80.04c.306.849.138 1.67.165 2.472.028.861.01 1.724.005 2.586-.005.812-.02 1.623-.03 2.49-.973.18-1.857.075-2.806.072-.242-1.61.023-3.157-.18-4.742-.286-.027-.535-.058-.784-.07-.216-.012-.433-.004-.65-.004-25.202 0-50.405.002-75.607-.003-2.27 0-4.502.256-6.64 1.02C9.356 6.94 5.357 10.935 3.547 17c-.422 1.415-.568 2.872-.62 4.34-.019.516-.007 1.034-.007 1.551v70.479c0 .55.018 1.102.028 1.668.246.065.409.144.571.144 31.782.006 63.563.006 95.431.006.035-.388.089-.719.09-1.05.007-2.5.004-5 .004-7.5v-1.325c.935-.298 1.832-.117 2.786-.134.053.212.145.409.145.605.007 3.923.003 7.846-.002 11.768 0 .085-.03.169-.06.324-.221.036-.464.095-.71.112-.302.02-.606.006-.91.006l-98.602-.001c-.514 0-1.028-.016-1.686-.027"
          fill="#FFF"
        />
        <path
          d="M55 44.594h11.713c.448.32.571.796.757 1.216 1.317 2.98 2.615 5.968 3.915 8.956 2.088 4.796 4.114 9.62 6.493 14.287.173.34.385.665.618.968.16.208.53.225.695.023.296-.362.602-.735.803-1.152.875-1.815 1.755-3.63 2.558-5.477 2.173-4.993 4.29-10.01 6.464-15.002 1.302-2.987 2.706-5.93 3.998-8.921 1.174-2.715 2.3-5.451 3.369-8.208.54-1.395.958-2.842 1.328-4.292.177-.691.176-1.444.147-2.166-.04-1.06-.786-1.738-1.86-1.712-1.383.034-2.767.008-4.15.007h-1.333c-.4-1.018-.144-1.981-.21-2.984.296-.058.498-.132.7-.132 6.053-.006 12.106-.006 18.16-.002.208 0 .417.05.664.083.28.99.146 1.945.088 2.974-.485.024-.864.054-1.243.059-.735.009-1.47.002-2.205.005-.868.003-1.451.387-1.81 1.195-.978 2.193-1.997 4.368-2.994 6.553-4.756 10.416-9.657 20.765-14.504 31.14-3.122 6.681-6.038 13.457-9.055 20.187-.262.585-.534 1.176-.889 1.707-1.136 1.696-3.175 1.228-3.978-.097-.2-.329-.374-.676-.536-1.025-4.684-10.12-9.362-20.241-14.05-30.358-.992-2.14-2.018-4.265-3.024-6.399-.196-.416-.37-.842-.629-1.433M127 51.89l.001-38.89c0-.43-.011-.863.035-1.29.048-.434.427-.694.937-.71.513-.014.911.233.975.666.056.383.05.773.05 1.16.002 7.838.002 15.676.002 23.515 0 18.217 0 36.434-.002 54.652 0 .43.01.862-.04 1.29-.05.434-.437.704-.93.717-.482.012-.925-.262-.98-.674-.056-.426-.046-.859-.046-1.289C127 77.987 127 64.938 127 51.89M184.976 30.216c0 1-.023 1.908.007 2.814.031.937-.138 1.888.115 2.819 1.118.312 2.166.303 3.157-.23.962-.516 1.59-1.276 1.626-2.453.039-1.207-.48-2.09-1.47-2.691-1.047-.635-2.158-.732-3.435-.259m3.957 6.654c.401 1.07 2.457 4.54 3.092 5.27.439.504.96.847 1.601 1.036.146.043.24.273.374.439-1.416.633-2.64.495-3.636-.488-.547-.539-1.01-1.183-1.428-1.834-.608-.946-1.14-1.941-1.707-2.914-.261-.448-.526-.892-.788-1.335h-1.387c-.15 2.241.005 4.444-.094 6.652a5.57 5.57 0 01-2.015 0c-.019-.475-.048-.9-.049-1.326-.003-3.392 0-6.783-.005-10.175-.001-.477 0-.961-.078-1.429-.127-.758-.406-.993-1.188-1.132-.126-.022-.268.004-.38-.046-.1-.046-.222-.155-.24-.254-.038-.212.136-.31.309-.315.6-.017 1.2-.025 1.8-.014 1.672.033 3.344.064 5.014.12.829.03 1.6.302 2.31.73 1.263.759 1.818 1.886 1.758 3.377-.058 1.456-.74 2.462-1.993 3.099-.41.208-.847.362-1.27.54M231.517 36.074c-.215.136-.365.21-.492.315-.196.16-.39.327-.562.514-1.512 1.636-1.238 3.87.618 5.073 1.791 1.162 3.793.81 5.265-.923-.027-.076-.033-.174-.084-.225-1.555-1.564-3.114-3.122-4.745-4.754m6.522-2.327c1.385-.208 3.669-.188 4.592.017-.088.104-.153.252-.227.258-1.047.08-1.67.722-2.107 1.629-.13.27-.26.542-.385.816-.553 1.208-1.104 2.418-1.664 3.646 1.146 1.302 2.341 2.603 4.752 3.346-.106.09-.186.167-.275.23-.029.02-.081.008-.123.008-.925-.004-1.878.134-2.767-.053-.908-.19-1.501-1.06-2.246-1.612-.166-.124-.328-.253-.534-.413-.543.45-1.053.885-1.577 1.302-1.124.892-2.408 1.199-3.8 1.038-1.181-.136-2.161-.686-2.894-1.655a3.78 3.78 0 01-.17-4.368c.387-.605.922-1.114 1.418-1.64.26-.276.579-.496.927-.787-.17-.249-.328-.485-.49-.718-.365-.527-.782-1.024-1.087-1.585-.607-1.11-.55-2.241.1-3.324a3.66 3.66 0 012.297-1.702c1.027-.26 2.068-.293 3.125.275l-.465 1.266c-.306-.215-.536-.394-.782-.544-.615-.377-1.285-.396-1.955-.235a1.688 1.688 0 00-1.274 1.587c-.012.418.06.87.216 1.255.209.513.49 1.01.82 1.45 1.758 2.334 3.945 4.236 6.02 6.398.238-.377.454-.639.583-.94.372-.867.717-1.748 1.053-2.63.09-.239.132-.503.16-.759.083-.74-.039-.922-.762-1.245-.104-.046-.194-.124-.479-.311M195.338 54.543c-.269 1.006-.15 1.74-.17 2.458-.022.742-.006 1.485-.006 2.228v2.097c0 .742.014 1.485-.003 2.227-.018.732.082 1.472-.088 2.244h-.737c-.282-.45-.171-.898-.173-1.323-.009-3.32-.003-6.64-.007-9.959 0-.436 0-.876-.054-1.307-.125-1.002-.437-1.326-1.43-1.564-.164-.04-.358-.042-.484-.137-.097-.073-.107-.265-.186-.49.746 0 1.387-.044 2.021.01 1.034.086 1.866.593 2.514 1.416.832 1.056 1.668 2.109 2.5 3.164 1.345 1.7 2.685 3.404 4.035 5.1.205.258.363.58.701.708.333-.233.226-.56.227-.837.008-2.708.005-5.416.005-8.124v-1.38h.879c.149 1.068.16 13.659.018 14.82-.2.17-.4.122-.56-.052-.232-.255-.447-.528-.662-.8-2.445-3.096-4.888-6.194-7.334-9.29-.264-.334-.545-.655-1.006-1.209M241.849 64.796c.818.132 3.413.155 4.062.065 1.101-.152 1.953-.693 2.443-1.84.065-.153.165-.295.272-.417.04-.046.156-.046.221-.019.06.026.122.107.141.178a.486.486 0 01-.014.259c-.202.62-.408 1.238-.621 1.853-.24.692-.733 1.012-1.368 1.103-.157.023-.318.02-.476.02-2.028.002-4.055.004-6.082-.002-.189 0-.377-.05-.634-.085-.02-.487-.054-.916-.055-1.345-.004-3.389 0-6.778-.004-10.167 0-.483-.002-.97-.057-1.449-.103-.9-.303-1.112-1.101-1.289l-.576-.12.034-.495c.284-.015.556-.042.827-.042 2.425-.004 4.85-.008 7.275.004.393.001.795.036 1.177.133.6.15.986.592 1.036 1.282.047.654.032 1.314.02 1.97 0 .08-.153.218-.231.215-.09-.004-.204-.117-.254-.216-.054-.109-.05-.255-.066-.386-.129-1.064-.72-1.618-1.634-1.815-.194-.042-.391-.096-.588-.097-1.23-.009-2.46-.004-3.705-.004-.342.944-.153 1.875-.174 2.782-.02.912-.074 1.835.07 2.818 1.78.204 3.52-.002 5.306.125v.977c-.609.132-1.2.05-1.784.065-.556.014-1.113 0-1.67.004-.59.004-1.18.014-1.824.022-.184.706-.089 1.363-.104 2.005-.016.66-.02 1.321 0 1.98.021.648-.11 1.314.138 1.928M218.026 52.097c-1.703 0-3.283-.013-4.863.012-.309.004-.627.122-.92.248-.46.199-.808.556-.963 1.098-.095.335-.161.68-.259 1.014-.017.06-.122.117-.187.118-.065.001-.186-.07-.187-.11 0-.789-.039-1.583.042-2.361.046-.443.383-.78.789-.91.338-.108.695-.196 1.044-.198 2.735-.014 5.469-.006 8.203 0 .074 0 .148.037.226.059.172.421-.151.652-.316.92-2.346 3.826-4.703 7.642-7.054 11.463-.24.39-.457.8-.668 1.17.221.42.521.315.774.317 2.021.008 4.042.002 6.063.007.349 0 .697.032 1.078.05v.825c-.053.054-.08.087-.113.113-.03.024-.065.059-.097.059-3.447.006-6.894.01-10.341.009-.07 0-.138-.074-.277-.152.025-.175.012-.4.092-.572.144-.312.34-.593.521-.883 2.257-3.625 4.519-7.247 6.77-10.878.238-.385.561-.735.643-1.418M149.108 33.431c-.15-.276-.252-.414-.304-.57-.099-.295-.159-.604-.253-.902-.744-2.352-2.497-2.983-4.409-2.835-1.426.11-2.331 1.193-2.202 2.501.05.519.275.952.644 1.286.393.357.817.69 1.266.972 1.053.663 2.134 1.28 3.192 1.934.529.327 1.045.677 1.545 1.046 2.177 1.604 1.692 5.104-.457 6.399-.19.114-.386.23-.593.301-2.232.756-4.374.53-6.397-.672-.78-.463-1.2-1.162-1.13-2.121.052-.696-.066-1.406.122-2.273.244.241.406.331.454.463.18.502.29 1.03.485 1.526.56 1.42 1.622 2.211 3.126 2.342.612.052 1.255.064 1.849-.066 1.884-.412 2.489-2.398 1.16-3.817-.449-.48-1.015-.863-1.572-1.223-.933-.602-1.908-1.137-2.85-1.726a12.865 12.865 0 01-1.411-1.004c-1.268-1.053-1.583-2.46-1.249-3.997.323-1.485 1.33-2.39 2.78-2.768 1.802-.47 3.527-.196 5.149.68.925.5 1.466 1.268 1.368 2.4-.047.533-.001 1.072-.03 1.607-.007.136-.14.264-.283.517M183.822 52.095c-.181 1.086-.187 4.488-.01 5.63 1.701.136 3.424-.033 5.203.1v.922c-.872.21-1.734.075-2.588.1-.86.024-1.72.005-2.558.005-.23.924-.263 4.637-.058 6.03.76.01 1.538.032 2.314.026a18.528 18.528 0 001.761-.075c1.05-.108 1.846-.677 2.336-1.746.07-.154.131-.338.245-.435.093-.08.259-.05.533-.09-.286.877-.509 1.617-.768 2.34-.245.68-.745.988-1.374 1.073-.494.066-6.346-.01-6.938-.097-.255-.333-.14-.747-.14-1.125-.01-3.476-.002-6.951-.012-10.427a12.927 12.927 0 00-.113-1.572c-.08-.634-.39-1.038-.998-1.095-.19-.018-.381-.08-.563-.15-.05-.019-.098-.144-.094-.216.005-.073.064-.182.12-.202.146-.052.304-.086.457-.086 2.589-.005 5.178-.01 7.766.005.347.002.703.08 1.035.193.491.168.813.59.86 1.148.057.694.016 1.4-.004 2.1-.002.063-.16.12-.323.231-.097-.382-.181-.702-.26-1.025-.184-.746-.62-1.204-1.28-1.396-.227-.066-.46-.156-.69-.16-1.29-.014-2.582-.006-3.859-.006M212.704 42.926c2.804.045 5.394-.01 7.927.034.291.322.244.609.124.928-.095.034-.205.107-.314.107-3.356.006-6.713.007-10.069.001-.108 0-.216-.064-.372-.114.022-.18.002-.371.07-.508.171-.346.376-.673.578-1 2.27-3.668 4.546-7.333 6.809-11.007.212-.344.541-.642.55-1.182-.182-.04-.326-.1-.47-.1a497.31 497.31 0 00-4.028-.001c-.157 0-.315.022-.472.045-1.18.17-1.61.617-1.905 1.962-.027.125-.036.273-.103.364-.056.075-.186.082-.303.127-.211-.355-.116-.717-.125-1.054a7.974 7.974 0 01.046-1.19c.08-.632.432-1.038.972-1.2a3.31 3.31 0 01.936-.132c2.685-.01 5.37-.006 8.055 0 .11 0 .22.051.39.095 0 .395-.243.642-.408.912-2.341 3.83-4.689 7.652-7.034 11.478-.245.4-.48.806-.854 1.435M199.77 36.839c-.071 2.068-.028 3.993-.035 5.99.291.04.517.098.743.1.919.01 1.838.008 2.757.002.28-.002.56-.01.837-.053 1.111-.17 1.924-.793 2.4-1.937.116-.28.141-.266.528-.291-.086.794-.474 2.12-.749 2.578-.259.431-.628.67-1.083.744-.196.031-.398.027-.598.027-2.038.002-4.076.002-6.114-.001-.157 0-.314-.025-.46-.037-.316-.345-.197-.764-.198-1.142-.01-3.488-.001-6.977-.01-10.465a12.42 12.42 0 00-.106-1.58c-.09-.688-.425-1.124-1.11-1.14-.19-.005-.377-.077-.535-.111-.08-.264-.032-.433.156-.464.273-.046.554-.055.832-.056 2.357-.003 4.715-.006 7.072.003.398.002.801.026 1.191.103.668.133 1.061.618 1.138 1.349a8.559 8.559 0 01-.026 2.116c-.17-.033-.353-.021-.375-.081-.09-.242-.13-.507-.188-.763-.21-.924-.777-1.404-1.6-1.555a4.203 4.203 0 00-.715-.085 202.381 202.381 0 00-3.236 0c-.15.002-.298.062-.43.09-.157 1.076-.171 4.156-.023 5.517.21.024.436.07.663.072 1.239.008 2.478-.001 3.716.008.311.002.622.047.97.076v.832c-.127.051-.236.133-.345.134-1.2.014-2.397.016-3.596.02h-1.471"
          fill="#FFF"
        />
        <path
          d="M221.087 51.02c.776 0 1.577-.054 2.368.015.89.079 1.273.497 1.394 1.409.07.516.079 1.042.081 1.564.01 1.918-.01 3.836.014 5.753a14.6 14.6 0 00.179 2.21c.238 1.433 1.052 2.846 3.2 2.933a8.905 8.905 0 001.52-.074c1.51-.199 2.477-1.09 2.833-2.595a11.56 11.56 0 00.294-2.455c.039-2.44.017-4.88.019-7.321V51.2c.522-.165.522-.165.949-.064.018.319.053.659.053.998.004 2.485.023 4.97-.01 7.453-.013.91-.09 1.831-.253 2.725-.367 2.03-1.597 3.223-3.567 3.543-1.137.185-2.282.201-3.415-.007-1.782-.327-2.99-1.348-3.491-3.182-.29-1.057-.395-2.137-.4-3.23-.005-1.787 0-3.574-.005-5.36a9.098 9.098 0 00-.056-1.174c-.116-.864-.347-1.095-1.183-1.272-.163-.034-.331-.05-.485-.108-.06-.022-.115-.13-.125-.205-.01-.074.042-.156.086-.297"
          fill="#FFF"
        />
        <g transform="translate(263 51)">
          <mask id="prefix__b" fill="#fff">
            <use xlinkHref="#prefix__a" />
          </mask>
          <path
            d="M6.297 3.577C5.46 4.839 3.796 8.619 3.633 9.556h4.934c.04-.123.111-.22.086-.28-.754-1.84-1.517-3.677-2.356-5.7M.121 14.662c.09-.269.142-.476.228-.67C2.262 9.658 4.179 5.328 6.099.997c.105-.237.213-.477.354-.695.201-.309.704-.285.892.048.171.302.309.623.445.941 1.457 3.393 2.91 6.787 4.368 10.18.154.358.322.712.487 1.067.365.78.862 1.422 1.816 1.58.044.008.107.015.125.043.085.132.197.268.215.412.008.068-.162.214-.267.23-1.064.167-2.066.019-2.957-.6-.711-.496-1.212-1.153-1.548-1.926-.224-.513-.436-1.031-.64-1.514-1.083-.152-4.775-.175-6.361-.04-.182.38-.392.8-.585 1.228-.341.752-.694 1.5-.999 2.266-.228.574-.62.67-1.323.444"
            fill="#FFF"
            mask="url(#prefix__b)"
          />
        </g>
        <path
          d="M172.789 32.657c-.721 1.164-2.302 5.056-2.394 5.93h4.735c-.165-.95-1.706-4.842-2.341-5.93m2.987 7.063h-5.95c-.692 1.3-1.105 2.738-1.813 4.115H167c.12-.358.198-.646.311-.919 1.785-4.322 3.575-8.643 5.364-12.964.1-.242.194-.49.322-.716.171-.303.711-.319.877-.021.147.265.25.557.363.84 1.37 3.408 2.736 6.816 4.106 10.222.196.487.4.97.615 1.448.335.749.812 1.34 1.65 1.528.117.026.222.118.327.19.032.02.044.073.065.11.008.279-.159.381-.394.41-1.602.196-2.859-.39-3.74-1.773-.231-.363-.39-.778-.566-1.177-.174-.397-.327-.803-.524-1.293M155.26 60.613h4.909c-.04-.218-.042-.393-.103-.544-.733-1.798-1.408-3.622-2.236-5.424-.593.803-2.229 4.606-2.57 5.968zm-.548 1.144l-1.747 4.112h-.95c0-.162-.037-.3.006-.405.68-1.659 1.37-3.314 2.061-4.97 1.195-2.866 2.388-5.734 3.594-8.596.158-.376.186-.925.78-.897.514.024.535.516.674.857 1.422 3.484 2.83 6.972 4.242 10.46.115.284.223.57.343.852.42.985.885 1.922 2.082 2.134.087.015.224.22.2.29-.047.138-.176.332-.294.35-1.606.246-2.887-.322-3.797-1.685-.263-.394-.43-.857-.626-1.294-.178-.394-.338-.796-.51-1.208h-6.058zM163 29l.95.071c.017.317.043.569.043.82.003 2.529.02 5.058-.01 7.587-.01.868-.085 1.744-.22 2.602-.344 2.192-1.531 3.376-3.641 3.765a9.059 9.059 0 01-3.525-.037c-1.68-.35-2.803-1.344-3.306-3.051a10.482 10.482 0 01-.41-2.966c-.001-1.962.004-3.924-.01-5.887a7.032 7.032 0 00-.122-1.295c-.11-.557-.416-.948-1.02-.986-.17-.01-.346-.004-.501-.06-.099-.035-.219-.163-.228-.26-.007-.086.126-.266.196-.266.882.005 1.766.001 2.645.072.517.042.828.453.93.949.104.506.15 1.033.155 1.552.02 2.136-.004 4.273.029 6.41.011.736.082 1.483.231 2.202.322 1.553 1.246 2.405 2.759 2.658.895.15 1.779.05 2.63-.228.985-.322 1.644-1.033 1.98-2.049.318-.959.428-1.952.431-2.959.008-2.398.01-4.797.013-7.195V29M60.291 39.453c-.537-.577-.999-1.08-1.47-1.575-.448-.468-.893-.94-1.361-1.385-.49-.466-.85-1.088-1.555-1.43-.37.375-.78.7-1.078 1.111-.81 1.111-.72 2.465.197 3.484.568.632 1.271 1.008 2.114 1.094 1.233.127 2.242-.32 3.153-1.299M58.986 28.37l-.417 1.078c-.314-.187-.565-.346-.824-.489-.48-.264-.995-.254-1.5-.133-.82.195-1.354 1.058-1.128 1.934.14.54.396 1.076.705 1.539.434.65.928 1.27 1.462 1.836 1.103 1.169 2.246 2.296 3.38 3.433.175.175.387.31.638.508.75-1.134 1.25-2.282 1.464-3.547.13-.77.048-.856-.727-1.28-.05-.028-.07-.115-.15-.257.248-.027.45-.069.65-.068.982.005 1.964.02 2.945.041.057.001.112.1.193.178-.124.055-.231.13-.348.15-.793.14-1.273.666-1.618 1.368-.038.078-.086.152-.122.232-.557 1.232-1.113 2.465-1.697 3.762.3.435.755.765 1.176 1.124.46.392.925.79 1.437 1.1.448.271.964.422 1.495.645-.14.11-.198.193-.257.194-.726.014-1.452.016-2.178.02-.085 0-.182.015-.253-.02-.227-.114-.462-.224-.662-.379-.58-.449-1.144-.919-1.775-1.43-.42.351-.838.705-1.261 1.051-.87.71-1.861 1.059-2.971 1.04a3.832 3.832 0 01-1.842-.494c-1.853-1.043-2.366-3.33-1.117-5.088.3-.423.687-.783 1.053-1.152.241-.243.518-.45.848-.731-.198-.258-.379-.482-.549-.715-.256-.352-.537-.69-.752-1.068-.816-1.427-.513-3.008.791-3.978 1.157-.86 2.42-1.014 3.911-.404M146.779 62.381c1.92-3.83 3.327-7.562 5.06-11.177H153c-.137.367-.226.65-.347.92-1.948 4.331-3.899 8.66-5.85 12.99-.108.238-.215.478-.345.705-.138.242-.538.242-.67-.003-.145-.269-.262-.551-.386-.83l-4.657-10.513c-.16-.359-.332-.711-.491-1.07-.39-.874-.94-1.574-1.998-1.784-.113-.022-.212-.234-.255-.376-.013-.042.182-.197.293-.208 1.565-.17 2.889.275 3.829 1.506.37.483.646 1.041.898 1.593 1.052 2.298 2.077 4.607 3.114 6.912.16.352.335.697.644 1.335M251 51.018c.878 0 1.594-.048 2.303.012.924.077 1.264.442 1.418 1.455.079.518.099 1.05.1 1.577.009 3.126.003 6.253.007 9.38 0 .433.025.867.042 1.382.315.03.578.077.841.078 1.673.007 3.345.002 5.017.006.393 0 .785.02 1.208.032.029.235.068.405.064.572-.004.12-.066.24-.098.347-.908.154-7.211.194-8.847.06-.289-.318-.178-.734-.179-1.11-.008-3.479 0-6.958-.011-10.436-.002-.569-.066-1.14-.133-1.705-.072-.598-.4-.934-.948-1.009a2.121 2.121 0 01-.574-.14c-.07-.03-.089-.199-.21-.501M178 64.908l-.052.937c-.96.205-7.997.21-9.098-.002-.017-.405-.049-.834-.05-1.263-.004-3.44.006-6.88-.01-10.32-.002-.568-.078-1.138-.16-1.7-.078-.544-.405-.836-.901-.908-.234-.034-.467-.089-.671-.128-.13-.316-.034-.51.205-.515.72-.013 1.445-.02 2.164.038.683.055 1.105.515 1.213 1.253.075.52.104 1.052.106 1.578.009 3.22.001 6.44.009 9.66.001.43-.09.88.173 1.37H178zM224.029 79.22c.598 0 1.044.007 1.49-.005.16-.005.323-.048.478-.093.574-.17.883-.6.856-1.178-.027-.59-.373-1.035-.943-1.11-.598-.079-1.206-.106-1.867.05-.02.307-.051.583-.051.86 0 .44.02.88.037 1.475m-.03.816v2.915h-.866c-.154-1-.18-5.542-.047-6.797.787-.177 2.712-.208 3.305-.053 1.292.338 1.849 1.7 1.145 2.828-.128.204-.311.374-.473.565.217.351.492.666.615 1.032.127.38.103.808.153 1.214.048.396.105.791.169 1.261l-.92-.058c-.302-.488-.22-.95-.257-1.397-.023-.283-.053-.574-.14-.843-.121-.38-.412-.636-.816-.659-.569-.033-1.14-.008-1.868-.008M166 76.023h1.01c.036.2.1.39.102.58.01 1.098.001 2.197.008 3.295.002.325-.006.655.052.973.165.899.793 1.352 1.81 1.346 1.064-.007 1.744-.526 1.867-1.454.042-.322.02-.65.021-.976.002-1.216.001-2.433.001-3.728l.919-.059c.088.12.177.186.178.252.015 1.423.052 2.847.018 4.27-.036 1.528-1.033 2.398-2.774 2.472-.41.017-.842.002-1.236-.092-1.015-.242-1.688-.81-1.886-1.751-.041-.2-.084-.403-.085-.604-.008-1.461-.004-2.922-.004-4.524M192.009 78.998c.035.493.019 1.046.125 1.573.19.943.88 1.503 1.749 1.518.908.015 1.604-.463 1.857-1.383a6.22 6.22 0 000-3.356c-.271-.972-1.023-1.466-1.979-1.393-.856.065-1.49.668-1.655 1.635-.076.443-.065.902-.097 1.406zm-.994-.019c0-.408-.038-.821.007-1.224.176-1.56 1.317-2.68 2.768-2.751 1.468-.073 2.73.908 3.042 2.424a7.708 7.708 0 01-.01 3.245c-.333 1.5-1.581 2.411-3.102 2.32-1.42-.083-2.51-1.14-2.692-2.654-.053-.447-.008-.906-.008-1.36h-.005zM262.042 79.078c.03.433.017.939.106 1.424.176.952.843 1.549 1.687 1.587.959.043 1.669-.458 1.929-1.446a6.336 6.336 0 00.002-3.226c-.256-.994-.972-1.508-1.92-1.466-.901.04-1.568.678-1.722 1.705-.067.446-.055.904-.082 1.422M261 78.98c.022-.453.009-.912.073-1.358.216-1.486 1.342-2.549 2.735-2.618 1.46-.073 2.714.908 3.025 2.423a7.746 7.746 0 01-.01 3.244c-.33 1.5-1.57 2.413-3.082 2.323-1.41-.084-2.496-1.14-2.677-2.654-.053-.446-.008-.906-.008-1.36H261M153.862 77.325l-.722.091c-.117-.255-.207-.503-.337-.722-.456-.77-1.327-1.013-2.069-.594-.63.356-.749 1.36-.18 1.826.29.239.65.387.993.54.345.153.73.213 1.053.404.357.213.721.474.98.81.67.864.513 2.099-.298 2.776-1.05.875-3.033.666-3.885-.422-.277-.352-.468-.75-.372-1.243.689-.158.689-.158 1.028.434.492.859 1.617 1.172 2.398.669.628-.405.72-1.333.135-1.837-.282-.245-.656-.368-.996-.528-.493-.232-1.014-.402-1.484-.68-.682-.403-.995-1.065-.914-1.929.075-.809.509-1.34 1.154-1.644 1.702-.8 3.42.25 3.574 1.705.008.084-.028.173-.058.344M178.067 76.82c-.179 1.314-.164 4.4.016 5.358.135.016.283.045.432.05.234.007.469.013.701-.006.997-.083 1.685-.723 1.796-1.754a9.518 9.518 0 00.011-1.829c-.095-1.101-.788-1.76-1.845-1.817-.349-.018-.7-.002-1.111-.002m-.929 6.128c-.158-1.004-.187-5.437-.05-6.824a7.82 7.82 0 012.872.018c1.048.207 1.863 1.165 1.984 2.306.073.684.073 1.39.01 2.075a2.692 2.692 0 01-2.172 2.411 4.067 4.067 0 01-.816.055c-.615-.005-1.235.047-1.828-.04M238.988 82.226c.505 0 .894.028 1.277-.005.937-.082 1.625-.71 1.733-1.68a9.268 9.268 0 00-.003-2.07c-.09-.782-.537-1.368-1.289-1.572-.554-.15-1.134-.138-1.718.008v5.32zm-.845.73c-.163-1.003-.194-5.387-.055-6.829a7.682 7.682 0 012.868.016c1.09.215 1.9 1.224 2.004 2.424.054.607.051 1.227.005 1.835-.101 1.343-1.023 2.366-2.295 2.55-.46.068-.935.044-1.403.044-.38 0-.762-.026-1.124-.04zM218.052 76.038h.912c.011.38.028.701.028 1.022 0 1.226.027 2.454-.017 3.68-.045 1.243-.766 2.051-1.933 2.219-.379.054-.778.056-1.157-.002-1.098-.167-1.83-.982-1.863-2.157-.043-1.55-.01-3.104-.01-4.726l.75-.074c.077.126.15.19.15.256.015 1.185.02 2.37.03 3.556.002.327-.012.656.017.98.081.897.61 1.411 1.446 1.436.918.027 1.513-.471 1.617-1.382.037-.323.028-.652.03-.98.002-1.225 0-2.451 0-3.828M258.962 77.62h-.712c-.068-.192-.15-.385-.205-.587-.224-.819-.763-1.124-1.437-1.132-.642-.008-1.122.36-1.382 1.05-.108.287-.212.6-.224.905-.032.769-.032 1.542 0 2.31.014.306.119.62.23.904.292.742.808 1.07 1.51 1.018.65-.048 1.108-.386 1.306-1.134.045-.168.097-.334.156-.531h.706c.206.5.02.903-.174 1.294a2.199 2.199 0 01-1.165 1.085c-1.686.69-3.331-.484-3.513-2.553a13.047 13.047 0 01.012-2.58c.233-2.072 1.913-3.284 3.78-2.349.765.383 1.066 1.02 1.112 2.3M142.213 79.828c-.123.804-.055 1.525-.047 2.267.61.226 1.18.117 1.732.139.613.024 1.228.011 1.84.05.2.013.299.2.25.377a.486.486 0 01-.218.282c-.112.057-.273.056-.412.056-1.277.002-2.554.002-3.83-.007-.13-.001-.26-.064-.374-.095-.18-.97-.21-5.549-.046-6.803.17-.03.353-.088.535-.089 1.366-.008 2.732-.004 4.18-.004v.773h-3.48c-.355.72-.167 1.397-.147 2.12 1.049.26 2.104-.014 3.089.175.139.585.093.685-.352.7-.567.017-1.135.002-1.702.01-.318.005-.636.03-1.018.05M159.456 76.968c-.785-.361-1.582-.026-2.379-.277-.023-.123-.114-.297-.06-.418.052-.119.25-.26.385-.26 1.836-.018 3.673-.012 5.566-.012l.032.66c-.769.284-1.557-.007-2.373.23-.14.623-.058 1.275-.071 1.918-.014.698-.003 1.396-.003 2.094v2.024l-.965.073c-.054-.165-.122-.279-.123-.393-.008-1.478-.008-2.956-.01-4.433v-1.206M208.823 76h1.123c.02.278.05.513.05.747.005 1.265.005 2.53.001 3.794 0 .244.007.492-.038.732-.129.69-.555 1.223-1.326 1.506a3.404 3.404 0 01-2.41.001c-.373-.142-.697-.433-.956-.713-.269-.29-.373-.655-.13-1.075h.853c.068.158.12.31.197.453.344.628.727.813 1.477.725.586-.07 1.008-.426 1.113-.99.052-.28.042-.569.043-.854.005-1.142.003-2.284.003-3.426V76zM186.088 76h.732c.082.075.121.097.14.131.02.034.024.08.024.121.007 2.075.014 4.15.016 6.224 0 .12-.038.24-.053.332-.254.3-.528.163-.785.146-.176-.921-.22-5.047-.074-6.954M233.092 76.107c.103-.036.215-.102.33-.106.155-.006.312.035.455.054.155 1.047.165 5.623.021 6.799-.248.195-.507.185-.772.026-.149-.925-.173-5.46-.034-6.773M247.88 82.961l-.72.039c-.269-.786-.112-1.574-.139-2.345-.027-.75-.013-1.5-.004-2.25.01-.782-.04-1.567.037-2.405h.84c.147 1.202.14 5.86-.014 6.961"
          fill="#FFF"
        />
        <path
          d="M173.872 26H176c-.1.24-.144.445-.26.602-.488.665-1.008 1.31-1.498 1.976-.3.408-.678.52-1.242.336.077-1.014.505-1.938.872-2.914M232 74.935l.805-.935H234c-1.135 1.07-1.153 1.078-2 .935"
          fill="#FFF"
        />
      </g>
    </svg>
  )
}

export default Logo