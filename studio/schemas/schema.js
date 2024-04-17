// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'

// document schemas
import navMenu from './documents/navMenu'
import author from './documents/author'
import category from './documents/category'
import pageCategory from './documents/pageCategory'
import reviews from './documents/reviews'
import post from './documents/post'
import guide from './documents/guide'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import route from './documents/route'

import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import * as sections from './sections'
import plugDefaultFields from './plugs/_plugDefaultFields'
import sectionDefaultFields from './sections/_sectionDefaultFields'

// Object types
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import menuBranch from './objects/menuBranch-object'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import seo from './objects/seo'
import latex from './latex'
import borderButton from './objects/borderButton'
import featureIcon from './objects/featureIcon'
import service from './objects/service'
import faq from './objects/faq'
import stage from './objects/stage'

const allPlugs = Object.values(plugs).map(plug => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

const allSections = Object.values(sections).map(section => {
  return { ...section, fields: sectionDefaultFields.concat(section.fields) }
})

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      seo,
      experiment,
      route,
      link,
      simpleBlockContent,
      cta,
      menuBranch,
      siteSettings,
      post,
      guide,
      navMenu,
      page,
      reviews,
      category,
      pageCategory,
      author,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
      borderButton,
      featureIcon,
      service,
      faq,
      stage
    ])
    .concat(allPlugs)
    .concat(allSections)
})
