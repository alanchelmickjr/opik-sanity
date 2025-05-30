/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as OpikApi from "../index";

export interface DatasetItemBatch {
    /** If null, dataset_id must be provided */
    datasetName?: string;
    /** If null, dataset_name must be provided */
    datasetId?: string;
    items: OpikApi.DatasetItem[];
}
