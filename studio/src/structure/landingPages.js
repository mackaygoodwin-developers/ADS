import S from '@sanity/desk-tool/structure-builder'
import PreviewIFrame from '../../src/components/previewIFrame'

import { MdMenu } from 'react-icons/md'
import { GrTools } from 'react-icons/gr'

export default S.listItem()
  .title('Page Builder')
  .icon(GrTools)
  .child(
    S.list()
      .title('Landing Pages')
      .items([
        S.listItem()
          .title('Navigation Menus')
          .icon(MdMenu)
          .schemaType('navigationMenu')
          .child(S.documentTypeList('navigationMenu').title('Navigation Menus')),
        S.listItem()
          .title('Routes')
          .schemaType('route')
          .child(
            S.documentTypeList('route')
              .title('Routes')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('route')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.divider(),
        S.listItem()
          .title('Pages')
          .schemaType('page')
          .child(
            S.documentList('page')
              .title('Pages')
              .menuItems(S.documentTypeList('page').getMenuItems())
              .filter('_type == "page" && _id != "frontpage"')
          ),
        S.listItem()
          .title('Pages by category')
          .child(
            // List out all categories
            S.documentTypeList('pageCategory')
              .title('Pages by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('page')
                  .title('Pages')
                  .filter('_type == "page" && $catId == pageCategory._ref')
                  .params({ catId })
              )
          ),
        S.documentTypeListItem('pageCategory').title('Manage page categories')
      ])
  )
