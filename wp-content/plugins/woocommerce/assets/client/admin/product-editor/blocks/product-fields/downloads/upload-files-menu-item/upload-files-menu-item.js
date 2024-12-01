"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UploadFilesMenuItem=void 0;const components_1=require("@wordpress/components"),element_1=require("@wordpress/element"),i18n_1=require("@wordpress/i18n"),icons_1=require("@wordpress/icons"),media_utils_1=require("@wordpress/media-utils");function UploadFilesMenuItem({allowedTypes:e,maxUploadFileSize:o,onUploadSuccess:i,onUploadError:n}){var l;const r=o||(null===(l=window.productBlockEditorSettings)||void 0===l?void 0:l.maxUploadFileSize)||10485760;return(0,element_1.createElement)(components_1.FormFileUpload,{multiple:!0,onChange:function(o){const l=o.currentTarget.files;(0,media_utils_1.uploadMedia)({allowedTypes:e,filesList:l,maxUploadFileSize:r,onFileChange:i,onError:n,additionalData:{type:"downloadable_product"}})},render:({openFileDialog:e})=>(0,element_1.createElement)(components_1.MenuItem,{icon:icons_1.upload,iconPosition:"left",onClick:e,info:(0,i18n_1.__)("Select files from your device","woocommerce")},(0,i18n_1.__)("Upload","woocommerce"))})}exports.UploadFilesMenuItem=UploadFilesMenuItem;