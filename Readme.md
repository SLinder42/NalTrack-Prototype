NalTrack Mockup Read Me
===============

## Introduction

This is a mockup of a Naloxone tracking web application. Eventually it will have proper database functionality, but for now I have added dummy values to show off the project. I used the Node framework to build this but lack a proper means of hosting it on the web, so you will need to download the files and run them locally.

## Features

  * Summarizes the data for you on the index page
  * Displays the full data if you wish to look at it

## Description

This program allows you to see the benefits of tracking Naloxone distribution through your organization. For example, you will be able to check how much Naloxone was purchased and at what prices so you can see the direct economic cost for responding to the opioid crisis. Furthermore, the database lets you track when Naloxone was used, how much was used, where it was used, and who was saved. If the same individual required multiple revivals, you will be able to track that. If in one location or at one time the Naloxone doses needed to be higher to revive people, you will be able to track that too. Various reports on the overdose crisis are already available on the internet, so in addition to the database you should be able to check state or national trends via the Overdose Detection Mapping Application Program. That tool is more sophisticated, so NalTrack would provide a lower bar to entry because it could be customized towards the needs and data collection of specific companies, nonprofits, or governing bodies.

## Planned Features

  * Create records and write to JSON file (C)
  * Display/Read data from JSON file (R)
  * Update records and write to JSON file (U)
  * Delete records and write to JSON file (D)
  * Connect to MySQL database and perform CRUD functions using JavaScript requests
  * Rewrite code base to minimize duplication of methods
  * Install Node application on web to display
  * Implement testing framework using Node modules
  * Port to PHP for alternate server functionality

## Quick Installation (macOS)

  * Unzip archive file to get NalTrack folder
  * Move folder to Desktop
  * In the Finder, open the Go menu and select Applications
  * In the Applications folder, open the Utilities folder
  * In the Utilities folder, open the Terminal application
  * Enter the following command in the Terminal window: npm -v
  * If the Terminal does not recognize the command, install Node by going to https://nodejs.org and download the recommended version. After installation is complete entering npm -v in the Terminal should give the Node Package Manager version
  * Enter the following command in the Terminal window: cd Desktop
  * Enter the following command in the Terminal window: cd NalTrack
  * Enter the following command in the Terminal window: npm install
  * Enter the following command in the Terminal window: npm start