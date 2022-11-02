/* ---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*-------------------------------------------------------------------------------------------- */
'use strict';
import { registerLanguage } from 'monaco-editor/esm/vs/basic-languages/_.contribution';
import { registerCompleteItemsProvider, disposeProvider, onChange } from './simpleComplete';

declare var monaco: any;
declare var self: any;

// Allow for running under nodejs/requirejs in tests
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var _monaco = typeof monaco === 'undefined' ? self.monaco : monaco;
registerLanguage({
    id: 'dtGreenPlum',
    extensions: ['.gpsql', '.gpsql'],
    aliases: ['Gpsql', 'gpsql'],
    loader: () => import('./greenplum')
});
export { registerCompleteItemsProvider, disposeProvider, onChange };