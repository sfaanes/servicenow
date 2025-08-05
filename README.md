# ServiceNow – Project Support Files for ChatGPT
This repository contains files you can upload into a ChatGPT project folder.
The contents of these files guide ChatGPT to use correct ServiceNow tables, fields, and terminology when describing step-by-step solutions or answering your questions.

## File Types & Purposes
### 1 - bg_script_table_to_JSON
A ready-to-use Background Script for ServiceNow.
When run, it outputs a detailed JSON object describing all fields in a specified table, including:
-Field name & label
- Data type
- Reference target table (if applicable)
- Choice list options (if applicable)

#### How to use:
- Change the tableName value on line 2 to the table you want to inspect.
- Run the script in System Definition → Scripts - Background.
- Copy the JSON output from the logs and add it to the relevant .json file in this repo, or create a new file for your specific area.

### 2 - catalog_item_creation_servicenow
Contains correct information about fields, field-values, and field-types for creating and managing catalog items

Note that some preferences may have been set by me. Check the JSON file to verify it will suggest according to your policy and procedures.
### 3 - cmdb_core_tables
Contains detailed information about certain CMDB tables and their use, fields, field choices, configurations, integrations, field-mappings, and correct usage

### 4 - cmdb_tables
Contains high-level overview and descriptions of ALL ServiceNow CMDB tables

## Creating Guide Files
When creating JSON files for a new process area, also create a guide file (.md format) that documents the related JSON files and how they are used.
Example: CMDB_guide.md
Relevant files for CMDB-related work:
- CMDB_tables.json  
  General overview of CMDB tables in ServiceNow.
- CMDB_core_tables.json  
  Detailed reference for CMDB core tables, including all fields, types, and relationships.
