// const menuplanner = (function() {
//   var initModule = function ($container) {
//     $container.html(
//       `<div class="row row-content">
//         <div class="col">
//          <h1> Hello World </h1>
//         </div>
//       </div>`
//     );
//   };
//   return {initModule: initModule};
// }());
//
// export default menuplanner;
import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../css/menutable.scss';
//import shell from '../shell.htm';
import shell from '../menuplanner.htm';

export default class menuPlanner {

  static initModule($container) {
    $container.html(
      shell
    );
  }
}
