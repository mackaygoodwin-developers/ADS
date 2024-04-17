import S from '@sanity/desk-tool/structure-builder'
import {
  GoBook as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
  GoFileCode as GuideIcon,
  GoMilestone as CatIcon,
  GoMegaphone as BothIcon
} from 'react-icons/go'

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
  GuideIcon,
  CatIcon,
  BothIcon
}

const blog = S.listItem()
  .title('Guides & News')
  .icon(BothIcon)
  .child(
    S.list()
      .title('/blog')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('post')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('post')
          .title('All posts')
          .icon(BlogIcon),
        S.listItem()
          .title('Posts by category')
          .icon(BlogIcon)
          .child(
            // List out all categories
            S.documentTypeList('category')
              .title('Posts by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('post')
                  .title('Posts')
                  .filter('_type == "post" && $catId == category._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        // Guides
        S.listItem()
          .title('Published Guides')
          .schemaType('guide')
          .icon(GuideIcon)
          .child(
            S.documentList('guide')
              .title('Published Guides')
              .menuItems(S.documentTypeList('guide').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "guide" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('guide')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('guide')
          .title('All Guides')
          .icon(GuideIcon),
        S.listItem()
          .title('Guides by category')
          .icon(GuideIcon)
          .child(
            // List out all categories
            S.documentTypeList('category')
              .title('Guides by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('guide')
                  .title('Guides')
                  .filter('_type == "guide" && $catId == category._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem('author')
          .title('Team & Authors')
          .icon(AuthorIcon),
        S.documentTypeListItem('category')
          .title('Categories')
          .icon(CatIcon)
      ])
  )

export default blog
